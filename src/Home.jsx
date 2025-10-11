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
                    <p><b>1</b> - &nbsp;Folders and Files: <Link to="/quiz-questions/1">Start</Link> </p>
                    <p><b>2</b> - &nbsp;GitHub Pages: <Link to="/quiz-questions/2">Start</Link> </p>
                    <p><b>3</b> - &nbsp;VS Code: <Link to="/quiz-questions/3">Start</Link> </p>
                    <p><b>4</b> - &nbsp;Working with HTML: <Link to="/quiz-questions/4">Start</Link> </p>
                    <p><b>5</b> - &nbsp;Debugging HTML: <Link to="/quiz-questions/5">Start</Link> </p>
                    <p><b>6</b> - &nbsp;Container/Semantic Elements: <Link to="/quiz-questions/6">Start</Link> </p>
                    <p><b>7</b> - &nbsp;Working with CSS: <Link to="/quiz-questions/7">Start</Link> </p>
                    <p><b>8</b> - &nbsp;Working with Layout: <Link to="/quiz-questions/8">Start</Link> </p>
                   
                </div>

                <div>
                    <p><b>9</b> - &nbsp;Working with Text: <Link to="/quiz-questions/9">Start</Link> </p>
                    <p><b>10</b> - &nbsp;Working with Colours: <Link to="/quiz-questions/10">Start</Link> </p>
                    <p><b>11</b> - &nbsp;Working with Classes: <Link to="/quiz-questions/11">Start</Link> </p>
                    <p><b>12</b> - &nbsp;Adding Images and Videos: <Link to="/quiz-questions/12">Start</Link> </p>
                    <p><b>13</b> - &nbsp;Adding Google Fonts: <Link to="/quiz-questions/13">Start</Link> </p>
                    <p><b>14</b> - &nbsp;Working with Hyperlinks: <Link to="/quiz-questions/14">Start</Link> </p>
                    <p><b>15</b> - &nbsp;Styling Hyperlinks: <Link to="/quiz-questions/15">Start</Link> </p>
                    <p><b>16</b> - &nbsp;Working with Favicons: <Link to="/quiz-questions/16">Start</Link> </p>
                    {/* <p><b>17</b> - &nbsp;The Box Model: <Link to="/quiz-questions/17">Start</Link> </p>
                    <p><b>18</b> - &nbsp;Working with Cards: <Link to="/quiz-questions/18">Start</Link> </p>
                    <p><b>19</b> - &nbsp;Working with Text: <Link to="/quiz-questions/19">Start</Link> </p>
                    <p><b>20</b> - &nbsp;The Font Stack: <Link to="/quiz-questions/20">Start</Link> </p>
                    <p><b>21</b> - &nbsp;Google Fonts: <Link to="/quiz-questions/21">Start</Link> </p> */}





                </div>
            </div>

        </section>
        </main>
        <Footer />
        </>
    );
}   

export default Home;