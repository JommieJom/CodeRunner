import "./Main.css";
import hello from "../../assets/hello.jpg";
import Chart from "../charts/Chart";

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Hello Admin</h1>
                        <p>Welcome to your admin DashBoard</p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p"> All students </p>
                            <span className="font-bold text-title">45</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Time Table</p>
                            <span className="fold-bold text-title">more info</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-laptop fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Labs</p>
                            <span className="font-bold text-title">8</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Finished Labs</p>
                            <span className="font-bold text-title">5</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Understandings</h1>
                                <p>SE Year1, Python</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Report</h1>
                                <p>SE Year1, Python</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Labs</h1>
                                <p>75,000</p>
                            </div>

                            <div className="card2">
                                <h1>Attended</h1>
                                <p>50</p>
                            </div>

                            <div className="card3">
                                <h1>Passed</h1>
                                <p>28</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Main;