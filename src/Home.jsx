import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Home() {
    return (
        <>
        <Header />
        <main>
        <section className="home-section">
            <h2>Take the quizzes below to test your knowledge.</h2>

            <div className="two-cols">
                <div>
                    <p><b>1</b> - &nbsp;Web Browsers: <Link to="/quiz-questions/1">Start</Link> </p>
                    <p><b>2</b> - &nbsp;GitHub Pages: <Link to="/quiz-questions/2">Start</Link> </p>
                    <p><b>3</b> - &nbsp;VS Code: <Link to="/quiz-questions/3">Start</Link> </p>
                    <p><b>4</b> - &nbsp;Folders and Files: <Link to="/quiz-questions/4">Start</Link> </p>
                    <p><b>5</b> - &nbsp;Working with HTML: <Link to="/quiz-questions/5">Start</Link> </p>
                    <p><b>6</b> - &nbsp;Debugging HTML: <Link to="/quiz-questions/6">Start</Link> </p>
                    <p><b>7</b> - &nbsp;SEO and Web Pages: <Link to="/quiz-questions/7">Start</Link> </p>

                </div>
                <div>
                    <p><b>8</b> - &nbsp;Container Elements: <Link to="/quiz-questions/8">Start</Link> </p>
                    <p><b>9</b> - &nbsp;Working with CSS: <Link to="/quiz-questions/9">Start</Link> </p>
                    <p><b>10</b> - &nbsp;Negative Spacing: <Link to="/quiz-questions/10">Start</Link> </p>
                    <p><b>11</b> - &nbsp;Media Queries: <Link to="/quiz-questions/11">Start</Link> </p>
                    <p><b>12</b> - &nbsp;Colour Models: <Link to="/quiz-questions/12">Start</Link> </p>
                    <p><b>13</b> - &nbsp;Updating CSS Colours: <Link to="/quiz-questions/13">Start</Link> </p>
                    <p><b>14</b> - &nbsp;Classes and Custom Properties: <Link to="/quiz-questions/14">Start</Link> </p>
                </div>
            </div>

        </section>
        </main>
        <Footer />
        </>
    );
}   

export default Home;