import { Card, Page } from "components/layout"
import styles from "./Home.module.scss"
import MarsLogo from "./Mars.svg"
import MigalooLogo from "./Migaloo.svg"
import TerraClassic from "./TerraClassic.svg"
import Acre from "./Acre.svg"
import Canto from "./Canto.svg"
const setTimer = () => {
    // Set the date we're counting down to
    const countDownDate = new Date("march 25, 2023 00:00:01").getTime();

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
            <Card className={styles.backgroundColor}>
                <h1 className={styles.title}>Toxic Labs Node will be shutting down</h1>
                <div className={styles.space}></div>
                <p className={styles.centerAlign}>Please redelegate to Ginkou node on the LUNA Classic chain</p>
                <div className={styles.space}></div>
                <div className={styles.space}></div>
                <p className={styles.centerAlignSub}>Estimated Shutdown Time</p>
                <div className={styles.space}></div>
                <div className={styles.space}></div>
                <div className={styles.space}></div>
                <h5 id="demo" className={styles.countdown}></h5>
                <div className={styles.space}></div>
                <div className={styles.space}></div>
                <div className={styles.space}></div>
                <h2 className={styles.centerAlignSubText}>Toxic Labs is constantly expanding into the cosmos</h2>
                <div className={styles.space}></div>
                <p className={styles.centerAlign}>Toxic Labs aims to work with new and existing chains to build a solid relationship with cosmos developers and projects, the reason for this is .... Well we will let you figure that out</p>
                <div className={styles.space}></div>
                <p className={styles.centerAlign}>Come <a className={styles.atag} href="https://toxiclabs.io/validator/terravaloper1zdulm0mwm3apyyh66493xrmexca26r39a6pszl">stake</a> with us if you like what we are building and delivering and there is plenty more on the way</p>
                <div className={styles.space}></div>
                <div className={styles.space}></div>
                <h5 className={styles.centerAlignSubText}>Current Cosmos chains we validate on</h5>
                <div className={styles.space}></div>
                <div className={styles.space}></div>
                <Card className={styles.card}>
                    <Card className={styles.divStyle}>
                        <img src={TerraClassic} className={styles.image}></img>
                        <div className={styles.space}></div>
                        <div className={styles.space}></div>
                        <a href="https://toxiclabs.io/validator/terravaloper1zdulm0mwm3apyyh66493xrmexca26r39a6pszl" rel="noreferrer" target="_blank">
                            <h5 className={styles.cardtext}>LUNC

                            </h5>
                        </a>
                    </Card>
                    <Card className={styles.divStyle}>
                        <img src={MarsLogo} className={styles.image}></img>
                        <div className={styles.space}></div>
                        <div className={styles.space}></div>
                        <a href="https://toxiclabs.io/validator/marsvaloper1ag5e0y5vwkuzxm3lcux584lqrkyyc56qptwqq3" rel="noreferrer" target="_blank">
                            <h5 className={styles.cardtext}>MARS

                            </h5>
                        </a>
                    </Card>
                    <Card className={styles.divStyle}>
                        <img src={MigalooLogo} className={styles.image}></img>
                        <div className={styles.space}></div>
                        <div className={styles.space}></div>
                        <a href="https://toxiclabs.io/validator/migaloovaloper1r025wvgdqmx8qvtru7kpck9drynucgygmw4vc5" rel="noreferrer" target="_blank">
                            <h5 className={styles.cardtext}>WHITE WHALE

                            </h5>
                        </a>
                    </Card>
                    <Card className={styles.divStyle}>
                        <img src={Acre} className={styles.image}></img>
                        <div className={styles.space}></div>
                        <div className={styles.space}></div>
                        <a href="https://cosmosrun.info/acre-mainnet/staking/acrevaloper1083fuy08e3jn583wp96uv7azttthupayjpmpmh" rel="noreferrer" target="_blank">
                            <h5 className={styles.cardtext}>ACRE

                            </h5>
                        </a>
                    </Card>
                    <Card className={styles.divStyle}>
                        <img src={Canto} className={styles.image}></img>
                        <div className={styles.space}></div>
                        <div className={styles.space}></div>
                        <a href="https://cosmosrun.info/acre-mainnet/staking/acrevaloper1083fuy08e3jn583wp96uv7azttthupayjpmpmh" rel="noreferrer" target="_blank">
                            <h5 className={styles.cardtext}>Canto

                            </h5>
                        </a>
                    </Card>
                </Card>
                <div className={styles.space}></div>
                <Card className={styles.cardBackGround}>
                        <a href="www.ginkounodes.io" rel="noreferrer" target="_blank">
                            <h5 className={styles.cardkeplr}>Staking using kepler, we got you covered 
                                <h5>
                                    Click Here
                                </h5>
                            </h5>
                        </a>
                </Card>
            </Card>
        </Page>
    )
}
export default Home

