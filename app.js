let run = 0;
let over = 3;
let ball = 0;
let wicket = 0;
let ballWiseRes = [];

function runCount(num){
    
    if( wicket< 10 && ball < 6*over){
        run += num;
        ball++;
        ballWiseRes.push(num);
        console.log("Run", run);
        console.log(ballWiseRes);
        renderElement.render(<App />);
    }
    
}

function wicketCount(){
    if(wicket < 10 && ball < 6*over){
        wicket += 1;
        ball++;
        ballWiseRes.push('W');
        console.log("Run:",run, "wicket:", wicket);
        console.log(ballWiseRes);
        renderElement.render(<App />);
    }
}

const ScoreBoard = () =>

    (
        <>
        <button onClick={() => runCount(0)}>0</button>
        <button onClick={() => runCount(1)}>1</button>
        <button onClick={() => runCount(2)}>2</button>
        <button onClick={() => runCount(3)}>3</button>
        <button onClick={() => runCount(4)}>4</button>
        <button onClick={() => runCount(6)}>6</button>
        <button onClick={wicketCount}>Wicket</button>
        </>
    )
    
    const Result = () =>
        (
            <div>

                {ballWiseRes.map((res, index) => (
                    <span key={index}>
                        {index%6 === 0 ? <br /> : null}
                        <span>
                            {res === 0 ? <strong>.</strong> : res === 'W' ? <strong className="w">{res}</strong> : res}&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </span>
                    
                ))}
            </div>
        )
    

const App = () =>
    (
    <>
        <h1>SCORE KEEPER</h1>
        <h2>Score: {run}/{wicket}</h2>
        <ScoreBoard />
        <Result />
    </> 
    )


const renderElement = ReactDOM.createRoot(document.getElementById("root"));
renderElement.render(<App />);