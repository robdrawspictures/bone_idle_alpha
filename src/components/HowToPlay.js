import React from "react";

const HowToPlay = () => {

    return (
        <div className="faq-container">
            <h1>How To Play</h1>
            <hr/>
            <ul>
                <li>
                    <p>Click on enemies to attack.</p>
                </li>
                <li>
                    <p>Gain XP for killing enemies.</p>
                </li>
                <li>
                    <p>Bosses appear every 5 regular kills.</p>
                </li>
                <li>
                    <p>Kill bosses to gain Lambent Orbs.</p>
                </li>
                <li>
                    <p>Ascend to transform Lambent into Radiant Orbs.</p>
                </li>
                <li>
                    <p>Ascension resets all other progress.</p>
                </li>
                <li>
                    <p>Starting damage is increased per Radiant Orb.</p>
                </li>
                <li>
                    <p>Struggling to progress? Always ascend!</p>
                </li>
            </ul>
            <hr/>
        </div>
    )

}

export default HowToPlay;