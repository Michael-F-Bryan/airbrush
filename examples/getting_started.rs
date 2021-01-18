use airbrush::{
    Coordinate, Droplet, Path, RenderConfig, Renderer, StreamingPath,
};
use euclid::Scale;

fn main() {
    let path = box_outline();
    let cfg = RenderConfig {
        centre: Coordinate::new(5.0, 5.0),
        drawing_units_per_pixel: Scale::new(10.0),
        canvas_dimensions: euclid::size2(130, 130),
        frame_rate: 60,
    };

    let mut renderer = Renderer::from_config(&cfg, path);
    let mut i = 0;

    while let Some(next_frame) = renderer.next_frame() {
        next_frame.save(format!("/tmp/frame_{}.png", i)).unwrap();
        i += 1;
    }
}

fn box_outline() -> impl Path {
    const CORNERS: &[Coordinate] = &[
        Coordinate::new(0.0, 0.0),
        Coordinate::new(10.0, 0.0),
        Coordinate::new(10.0, 10.0),
        Coordinate::new(0.0, 10.0),
        Coordinate::new(0.0, 0.0),
    ];

    let coordinates = CORNERS.windows(2).flat_map(|window| {
        let previous = window[0];
        let next = window[1];
        let num_steps = 20;

        (0..num_steps)
            .map(move |i| previous.lerp(next, i as f64 / num_steps as f64))
    });
    let droplets = coordinates.map(|centre| Droplet {
        centre,
        distribution: airbrush::Distribution::NaiveCircular {
            radius: 2.0,
            placement_rate: 1.0,
        },
    });

    StreamingPath::new(droplets)
}
