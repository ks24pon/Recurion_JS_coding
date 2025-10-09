function quadraticEquation(a, b, c) {
  const quadraticEquation = b**2 - 4*a*c;
  if (a === 0) {
      return 0;
  }
  if (quadraticEquation == 0) {
      return 1;
  } else if (quadraticEquation > 0) {
      return 2;
  } else if (quadraticEquation < 0) {
      return -2;
  }
}