use euclid::{Rect, Scale, Size2D};
use image::{GenericImageView, GrayImage, Luma, Pixel};

use crate::{CanvasSpace, Coordinate, Droplet, Path, WorldSpace};

#[derive(Debug, Copy, Clone, PartialEq)]
pub struct RenderConfig {
    pub centre: Coordinate,
    pub drawing_units_per_pixel: Scale<f64, WorldSpace, CanvasSpace>,
    pub canvas_dimensions: Size2D<u32, CanvasSpace>,
    pub frame_rate: u32,
}

#[derive(Debug, Clone, PartialEq)]
pub struct Renderer<P> {
    current_frame: GrayImage,
    centre: Coordinate,
    drawing_units_per_pixel: Scale<f64, WorldSpace, CanvasSpace>,
    frame_rate: u32,
    path: P,
}

impl<P> Renderer<P> {
    pub fn from_config(cfg: &RenderConfig, path: P) -> Self {
        let RenderConfig {
            drawing_units_per_pixel,
            canvas_dimensions: Size2D { width, height, .. },
            frame_rate,
            centre,
        } = *cfg;

        Renderer {
            current_frame: GrayImage::from_pixel(width, height, Luma([0])),
            drawing_units_per_pixel,
            frame_rate,
            path,
            centre,
        }
    }

    fn dimensions(&self) -> Size2D<u32, CanvasSpace> {
        Size2D::from(self.current_frame.dimensions())
    }

    fn coordinate_to_pixel(
        &self,
        coord: Coordinate,
    ) -> Option<euclid::Point2D<u32, CanvasSpace>> {
        todo!()
    }
}

impl<P: Path> Renderer<P> {
    pub fn next_frame(&mut self) -> Option<&GrayImage> {
        let droplet =
            self.path.next_droplet((self.frame_rate as f64).recip())?;

        self.apply_droplet(droplet);

        Some(&self.current_frame)
    }

    fn apply_droplet(&mut self, droplet: Droplet) {
        let mask = droplet.distribution.mask(self.drawing_units_per_pixel);

        let centre_to_origin =
            (droplet.centre - self.centre) * self.drawing_units_per_pixel;
        let dx = centre_to_origin.x as u32;
        let dy = centre_to_origin.y as u32;

        for (x, y, pixel) in GenericImageView::pixels(&mask) {
            let target = self.current_frame.get_pixel_mut(dx + x, dy + y);
            // dbg!(x, y, pixel, *target);
            target.0[0] = target.0[0].saturating_add(pixel.0[0]);
        }
    }
}
