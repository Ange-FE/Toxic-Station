import { Card, Page } from "components/layout"
import styles from "./Home.module.scss"
import MarsLogo from "./Mars.svg"
import MigalooLogo from "./Migaloo.svg"
import TerraClassic from "./TerraClassic.svg"

const setTimer = () => {
    // Set the date we're counting down to
    const countDownDate = new Date("march 30, 2023 00:00:01").getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const element = document.getElementById("demo");

        // Display the result in the element with id="demo"
        if (element)
            element.innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";


        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            const element = document.getElementById("demo");
            if (element)
                element.innerHTML = "EXPIRED";
        }
    }, 1000);
}

const Home = () => {
    setTimer()
    return (
        <Page>
            <Card>

                <h2 className={styles.headingPurple}>
                    Toxic Labs node will be shutting down, please redelegate to Ginkou node on the LUNA Classic chain, you have
                </h2>
                <div className={styles.space}></div>
                <h1 id="demo" className={styles.headingRed}></h1>
                <div className={styles.space}></div>


                <h2 className={styles.heading}>
                    Toxic Labs is Constantly Expanding into the Cosmos
                </h2>
                <div className={styles.space}></div>
                <p>Why is Toxic Labs running Validators on other chains?</p>
                <div className={styles.space}></div>
                <p>Toxic Labs aims to work with new and existing chains to build a solid relationship with cosmos developers and projects, the reason for this well.... We will let you figure that out</p>
                <div className={styles.space}></div>
                <p>Come stake with us if you like what we are building and delivering and there is plenty more on the way</p>
                <div className={styles.space}></div>
                <h2 className={styles.heading}>
                    Here are the current Cosmos chains we validate on
                </h2>
                <div className={styles.space}></div>

                <Card>
                    <a className={styles.subheading} href="">Acre</a>
                </Card>
                <div className={styles.space}>
                </div>
                <Card>
                    <img className={styles.logo} src={TerraClassic}>
                    
                    </img>
                    <a className={styles.subheading} href="https://toxiclabs.io/validator/terravaloper1zdulm0mwm3apyyh66493xrmexca26r39a6pszl">LUNC</a>
                </Card>
                <div className={styles.space}>
                </div>
                <Card>
                    <img className={styles.logo} src={MarsLogo}>
                        
                    </img>
                    <a className={styles.subheading} href="https://toxiclabs.io/validator/marsvaloper1ag5e0y5vwkuzxm3lcux584lqrkyyc56qptwqq3">MARS</a>
                </Card>
                <div className={styles.space}>
                </div>
                <Card>
                    <img className={styles.logo} src={MigalooLogo}>
                        
                    </img>
                    <a className={styles.subheading} href="https://toxiclabs.io/validator/migaloovaloper1r025wvgdqmx8qvtru7kpck9drynucgygmw4vc5">WHITE WHALE</a>
                </Card>
                <div className={styles.space}>
                </div>
            </Card>
            
        </Page>
    )  
}

export default Home
