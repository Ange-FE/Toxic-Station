import { Card, Page } from "components/layout"
import styles from "./Projects.module.scss"
import { useChainID } from "data/wallet"
import ginkou from "./Ginkou.png"
import cavern from "./CavernProtocol.svg"
//import ToxicLabsDao from "../aboutus/ToxicLabsDao.jpg"

const Projects = () => {
    const chainID = useChainID()
    //let supportedProjects = "";  
    return (
        <Page title="Supported Projects">
            {chainID === "phoenix-1" && (
                <Card>
                    <span>
                        <img className={styles.image} src={cavern}></img>
                        <a className={styles.title} href="https://cavernprotocol.com/" target="_blank">Cavern Protocol</a>
                    </span>
                    <p>Based on the money-market principles of Anchor Protocol and with slight added differences, Cavern aims to become a safe place for user to lend and borrow funds by creating a fully decentralized platform.</p>
                </Card>
            )}
            {chainID === "columbus-5" && (
                <Card>
                    <span>
                        <img className={styles.image} src={ginkou}></img>
                        <p className={styles.title}>Coming Soon for you Ginkou</p>
                    </span>
                    <p>Based on the money-market principles of Cavern Protocol.</p>
                </Card>
            )}
            <div className={styles.space}>
            
            </div>
            {chainID === "columbus-5" && (
                <Card>
                    <span>
                        <p className={styles.title}>Coming Soon for you Toxic DEX</p>
                    </span>
                    <p>The Toxic Dex will allow for swapping LUNC & USTC pairs as well as other denoms</p>
                </Card>
            )}
            <div className={styles.space}>
            
            </div>
        </Page>
    )
}

export default Projects
