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
                    <p><b>1</b> - &nbsp;Adding JavaScript to web pages: <Link to="/quiz-questions/1">Start</Link> </p>
                    <p><b>2</b> - &nbsp;Variables and literals: <Link to="/quiz-questions/2">Start</Link> </p>
                    <p><b>3</b> - &nbsp;Working with strings: <Link to="/quiz-questions/3">Start</Link> </p>
                    <p><b>4</b> - &nbsp;Working with numbers: <Link to="/quiz-questions/4">Start</Link> </p>
                    <p><b>5</b> - &nbsp;Function declarations: <Link to="/quiz-questions/5">Start</Link> </p>

                    <p><b>6</b> - &nbsp;Making decisions with if: <Link to="/quiz-questions/6">Start</Link> </p>

                </div>

                <div>
                    <p><b>7</b> - &nbsp;Testing for weirdness: <Link to="/quiz-questions/7">Start</Link> </p>
                    <p><b>9</b> - &nbsp;The DOM and buttons: <Link to="/quiz-questions/9">Start</Link> </p>
                    <p><b>10</b> - &nbsp;Working with objects: <Link to="/quiz-questions/10">Start</Link> </p>
                    <p><b>11</b> - &nbsp;Working with arrays: <Link to="/quiz-questions/11">Start</Link> </p>
                    <p><b>12</b> - &nbsp;Arrays of objects: <Link to="/quiz-questions/12">Start</Link> </p>
                    <p><b>14</b> - &nbsp;Anonymous functions: <Link to="/quiz-questions/14">Start</Link> </p>
                    <p><b>15</b> - &nbsp;Arrow functions: <Link to="/quiz-questions/15">Start</Link> </p>
                    <p><b>16</b> - &nbsp;Introduction to forms: <Link to="/quiz-questions/16">Start</Link> </p>
                    <p><b>17</b> - &nbsp;Introduction to events: <Link to="/quiz-questions/17">Start</Link> </p>
                    



                    {/* <p><b>8</b> - &nbsp;Function Declarations: <Link to="/quiz-questions/8">Start</Link> </p>
                    <p><b>9</b> - &nbsp;Anonymous Functions: <Link to="/quiz-questions/9">Start</Link> </p>
                    <p><b>10</b> - &nbsp;Arrow Functions: <Link to="/quiz-questions/10">Start</Link> </p>
                    <p><b>11</b> - &nbsp;Making decisions with <i>if</i> : <Link to="/quiz-questions/11">Start</Link> </p>
                    {/* <p><b>12</b> - &nbsp;Introduction to Images: <Link to="/quiz-questions/12">Start</Link> </p>
                    <p><b>13</b> - &nbsp;Working with Images: <Link to="/quiz-questions/13">Start</Link> </p> 
                    <p><b>17</b> - &nbsp;The Box Model: <Link to="/quiz-questions/17">Start</Link> </p>
                    <p><b>18</b> - &nbsp;Working with Cards: <Link to="/quiz-questions/18">Start</Link> </p> */}

                </div>
            </div>

        </section>
        </main>
        <Footer />
        </>
    );
}   

export default Home;