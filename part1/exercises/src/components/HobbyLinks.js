import React from 'react';
import styles from "./HobbyLinks.module.css";

export default function HobbyLinks () {
    const hobbyLinks = ["https://www.apkpac.com/app/com.dreamgames.royalmatch?msclkid=4416e13487931a1aca9285f6335e6cf6&utm_source=bing&utm_medium=cpc&utm_campaign=apkbu1_app_us_pc_puzzle&utm_term=royal%20match&utm_content=Royal%20Match", "https://www.freecodecamp.org/"];
    return (
        <div className={styles.hobbyBody}>
            <h3>Hobbies</h3>
            <a href={hobbyLinks[0]}>Royal Match</a>
            <a href={hobbyLinks[1]}>Web Dev</a>
        </div>
        
    );
}