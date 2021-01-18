use crate::Droplet;

/// A stream of droplets which get deposited over time.
pub trait Path {
    fn next_droplet(&mut self, delta_time: f64) -> Option<Droplet>;
}

impl<F> Path for F
where
    F: FnMut(f64) -> Option<Droplet>,
{
    fn next_droplet(&mut self, delta_time: f64) -> Option<Droplet> {
        (self)(delta_time)
    }
}

#[derive(Debug, Clone)]
pub struct StreamingPath<I>(I);

impl<I> StreamingPath<I> {
    pub fn new<T>(iterable: T) -> StreamingPath<I>
    where
        T: IntoIterator<IntoIter = I>,
    {
        StreamingPath(iterable.into_iter())
    }
}

impl<I> Path for StreamingPath<I>
where
    I: Iterator<Item = Droplet>,
{
    fn next_droplet(&mut self, _delta_time: f64) -> Option<Droplet> {
        self.0.next()
    }
}
