function getTriangleArea(a, h) {
	if ( (a > 0) && (h > 0) ) {
		return a*h/2;
	} else {
		return "Nieprawidłowe dane";
	};
};

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(4, 6);
var triangle2Area = getTriangleArea(2, 3);
var triangle3Area = getTriangleArea(2, -3);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
