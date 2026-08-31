export type Circle = {
  kind: 'circle';
  radius: number;
};

export type Rectangle = {
  kind: 'rectangle';
  width: number;
  height: number;
};

export type Square = {
  kind: 'square';
  sideLength: number;
};

export type Shape = Circle | Rectangle | Square;

export function calculateArea(shape: Shape): number {
  // circle area is pi*raduis^2
  if(shape.kind == 'circle'){
    return Math.PI *shape.radius ** 2;
  }
  //rectangle area w*l
  else if(shape.kind == 'rectangle'){
    return shape.width * shape.height;
  }
  //square sidelegnth^2
  else{
    return shape.sideLength **2;
  }
}
