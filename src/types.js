export const Room =
  (x, y, width, height) => ({
    x, 
    y, 
    width, 
    height
  });

export const Block = 
  (x, y, r) => ({
    x,
    y,
    r
  });

export const Point = 
  (x=0, y=0) => ({
    x,
    y
  });

export const EndPoint =
  (x=0, y=0, beginsSegment=false, segment=null, angle=0) => ({
    ...Point(x, y),
    beginsSegment,
    segment,
    angle
  });

export const Segment =
  (x1, y1, x2, y2) => {
    const p1 = EndPoint(x1, y1);
    const p2 = EndPoint(x2, y2);
    const segment = { p1, p2, d: 0 };

    p1.segment = segment;
    p2.segment = segment;

    return segment;
  };
