import GeogebraComponent from "../GeogebraComponent/GeogebraComponent";
import Geogebra from "react-geogebra";
import GeoFile from "../ArchimedesMethod.ggb"
import {MathJax} from "better-react-mathjax";

console.log(GeoFile)

export default function Archimedes() {
    return(
        <main>
            <article role={"main"}>
                <h3>How does Archimedes' Method Work?</h3>
                <p>
                    Archimedes' method of approximating &pi;, known as the Method of Exhaustion, is a ancient technique.
                    Archimedes, a Greek mathematician born in 287 BC, used geometry to estimate the value
                    of &pi; by inscribing and circumscribing polygons around a circle.
                    He began with a triangle and successively added to the number of sides,
                    creating polygons with 12, 24, 48, and eventually 96 sides.
                    By calculating the perimeters of these polygons, he was able to determine upper and lower bounds
                    for the circumference of the circle, thus approximating &pi;.
                </p>
                <p>
                    This method hinged on the principle that as the number of polygon sides increases, the polygon's
                    perimeter more closely approximates the circle's circumference.
                    Thus Archimedes' work laid the foundation for future advancements in mathematics and our
                    understanding of &pi;.
                </p>
                <h3>Interactive Example</h3>
                <p>
                    This interactive example demonstrates Archimedes' Method, increase the slider on screen to add more
                    sides to the polygon. As the number of sides increase the estimation of &pi; become more accurate.
                </p>
                <p>
                    Note: The radius of this circle is <MathJax inline={true}>{"\\(\\frac{1}{2}\\)"}</MathJax> to
                    simplify the calculation.
                </p>
                <GeogebraComponent srcLink={"https://www.geogebra.org/calculator/jhr8epvb?embed"}/>
                <h3>Why does this work?</h3>
                <p>
                    This estimation of &pi; works mainly because of basic trigonometry. We take two adjacent vertices
                    we can define as <MathJax inline={true}>B</MathJax> and <MathJax inline={true}>B'</MathJax>, we
                    also take the center of the circle as A and the point in the middle of B and B' as C. We can now
                    say that the angle <MathJax inline={true}>{"\\(\\angle ACB\\)"}</MathJax> is equal to
                    <MathJax inline={true}> {"\\(90^\\circ\\)"}</MathJax>,
                    creating a triangle from the vertices A and B with our new point C.
                </p>
                <p>
                    From there we can also conclude by finding the line
                    <MathJax inline={true}> {"\\(\\overline{\\rm AB}\\)"}</MathJax> and multiplying it by 2 (because
                    point C is only the mid point between B and B') finds the length of one of the sides of the polygon.
                    Now by multiplying that length by our number of sides we can get our polygon parameter, the idea
                    being as the number of sides of our polygon increases the more is resembles the circle's. Since we
                    know our circle has a radius of <MathJax inline={true}>{"\\(\\frac{1}{2}\\)"}</MathJax>, and
                    therefore a diameter of 1, we can confidently say that
                    <MathJax inline={true}> {"\\(\\pi = C\\)"}</MathJax> which we have now found an approximation for.
                </p>
            </article>
        </main>
    )
}