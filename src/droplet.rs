use euclid::{Length, Scale};
use image::{GrayImage, Luma};
use std::convert::TryFrom;

use crate::{CanvasSpace, Coordinate, WorldSpace};

/// A droplet of material.
#[derive(Debug, Copy, Clone, PartialEq)]
pub struct Droplet {
    /// The centre of the droplet.
    pub centre: Coordinate,
    /// How the material is distributed.
    pub distribution: Distribution,
}

/// How material is distributed around a point.
#[derive(Debug, Copy, Clone, PartialEq)]
pub enum Distribution {
    /// Place the material evenly within a disk of `radius` units.
    NaiveCircular { radius: f64, placement_rate: f64 },
    /// Place the top half of a spherical glob of material at this location.
    HemiSphere { radius: f64 },
}

impl Distribution {
    pub(crate) fn mask(
        &self,
        drawing_units_per_pixel: Scale<f64, WorldSpace, CanvasSpace>,
    ) -> GrayImage {
        match *self {
            Distribution::NaiveCircular {
                radius,
                placement_rate,
            } => naive_circular_mask(
                radius,
                placement_rate,
                drawing_units_per_pixel,
            ),
            Distribution::HemiSphere { radius } => {
                hemisphere_mask(radius, drawing_units_per_pixel)
            },
        }
    }
}

fn hemisphere_mask(
    radius: f64,
    drawing_units_per_pixel: Scale<f64, WorldSpace, CanvasSpace>,
) -> GrayImage {
    todo!()
}

fn naive_circular_mask(
    radius: f64,
    placement_rate: f64,
    drawing_units_per_pixel: Scale<f64, WorldSpace, CanvasSpace>,
) -> GrayImage {
    let diameter =
        Length::<f64, WorldSpace>::new(2.0 * radius) * drawing_units_per_pixel;
    let diameter = diameter.get().ceil() as u32;
    let value = match placement_rate.round() {
        x if x < 0.0 => 0,
        x if x >= u8::max_value() as f64 => u8::max_value(),
        x => x as u8,
    };

    GrayImage::from_fn(diameter, diameter, |x, y| {
        let dx = std::cmp::min(x, diameter - x);
        let dy = std::cmp::min(y, diameter - y);

        if (dx as f64).hypot(dy as f64) <= (diameter / 2) as f64 {
            Luma([value])
        } else {
            Luma([0])
        }
    })
}
