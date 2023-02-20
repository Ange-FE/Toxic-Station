import { Card, Page } from "components/layout"
import styles from "./Projects.module.scss"
import { useChainID } from "data/wallet"
import ginkou from "./Ginkou.png"
import cavern from "./CavernProtocol.svg"
import ToxicLabsDao from "../../styles/images/menu/ToxicLabsLogo.svg"


const Projects = () => {
    const chainID = useChainID()
    //let supportedProjects = "";  
    return (
        <Page>
            {chainID === "phoenix-1" && (
                <Card>
                    <h1 className={styles.heading}>
                        Supported Projects
                    </h1>
                    <Card>
                        <span>
                        <img className={styles.image} src={cavern}></img>
                            <a className={styles.title} href="https://cavernprotocol.com/" rel="noreferrer" target="_blank">Cavern Protocol</a>
                        </span>
                        <p>Based on the money-market principles of Anchor Protocol and with slight added differences, Cavern aims to become a safe place for users to lend and borrow funds by creating a fully decentralized platform.</p>
                    </Card>
                </Card>
            )}
            <div className={styles.space}>
            </div>
            <div className={styles.space}></div>
            {chainID === "columbus-5" && (
                <Card>
                    <h1 className={styles.heading}>
                        Projects By Toxic Labs
                    </h1>
                    <Card>
                        <span>
                        <img className={styles.image} src={ginkou}></img>
                            <a className={styles.title} >Coming to your screen soon: Ginkou</a>
                        </span>
                        <p>Based on the money-market principles of Cavern Protocol which is Based on the money-market principles of Anchor Protocol and with slight added differences, Ginkou aims to become a safe place for users to lend and borrow funds by creating a fully decentralized platform.</p>
                    </Card>

                    <div className={styles.space}>

                    </div>
                    <Card>
                        <span>
                            <img className={styles.image} src={ToxicLabsDao}></img>
                            <a className={styles.title} >Coming to your screen soon: Toxic DEX</a>
                        </span>
                        <p>The Toxic Dex will allow for swapping LUNC & USTC pairs as well as other assets</p>
                    </Card>
                    <div className={styles.space}>
                    </div>
                </Card>
            )}
        </Page>
    )
}

export default Projects
