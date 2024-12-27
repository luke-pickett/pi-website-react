import MathJaxNode from "react-mathjax/lib/Node";
import {MathJax} from "better-react-mathjax";

export default function Home() {
    return (
        <main>
            <article role={"main"}>
                <h3>What is &pi;</h3>
                <p>
                    &pi; is defined as being the ratio of a circle's circumference to its diameter, or written as an
                    equation
                    from that definition we can write as the following equation: <MathJax inline={true}>{"\\(\\pi  = \\frac{C}{d}\\)"}</MathJax>.
                </p>
                <p>
                    &pi; is considered an irrational number because it cannot be expressed as a fraction between two
                    integers
                    and its decimal form is endless and has no repeating pattern. It is also a transcendental number,
                    meaning
                    it cannot be a root of a polynomial, it is also important to note that any transcendental number is
                    also
                    irrational.
                </p>
                <h3>Why is it so hard to find &pi;</h3>
                <p>
                    The best way to show why an approximation of &pi; is so difficult to get is first by using that
                    equation we defined before. What if we just take a circle and measure these
                    elements to make a ratio for &pi;.
                    Well, if we take a standard tape measure and find <MathJax inline={true}>\(C = 82 cm\)</MathJax> and
                    <MathJax inline={true}> {"\\(d = 26 cm\\)"}</MathJax> then the ratio of these two, <MathJax inline={true}>{"\\(\\frac{82}{26}\\)"}</MathJax>, is equal to 3.1538 approximately.
                    That
                    is almost the number we are familiar with, but there is a problem, our measurement could be more
                    accurate.
                    In fact, it could be infinitely more accurate...
                </p>
                <p>
                    It is for that reason simple measurements of &pi; are always flawed. We need some more accurate
                    means
                    of finding that ratio, luckily, we have many tools in the study of mathematics to assist us.
                    Trigonometry, Calculus, and even basic geometry and algebra are all a means of getting an accurate
                    approximation. Our methods in the nav all show a fraction of the different means we have.
                </p>
            </article>
        </main>
    );
}