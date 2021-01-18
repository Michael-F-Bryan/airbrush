mod droplet;
mod path;
mod render;

pub use droplet::{Distribution, Droplet};
pub use path::{Path, StreamingPath};
pub use render::{RenderConfig, Renderer};

pub type Coordinate = euclid::Point2D<f64, WorldSpace>;

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum WorldSpace {}
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum CanvasSpace {}
