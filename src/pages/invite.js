import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import './invite.css';

import '@fontsource/berkshire-swash';
import '@fontsource/corinthia';

const Invite = () => {
    const ref = useRef()
    return (
        <Parallax pages={6} ref={ref}>
            <ParallaxLayer offset={0.4} speed={0.5} factor={1}>
                <div className='parallax-section'>
                    <p style={{fontFamily:"'Berkshire Swash', cursive"}}>
                        I guess you're here to celebrate Love! <br/><br/> Let's hear Arjun's story now, shall we?
                    </p>
                    <div id='allSmiles'></div>
                </div>
            </ParallaxLayer>
            
            <ParallaxLayer offset={1.4} speed={0.5} factor={1}>
                <div className='parallax-section'>
                    <p style={{fontFamily:"'Berkshire Swash', cursive"}}>
                        Grab your coffee, sit back, <br/> Let me take you on a journey that started with a cup of coffee and ended with a lifetime of love
                    </p>
                    <div id='coffeeImage'></div>
                </div>
            </ParallaxLayer>

            {/* Scene 1 */}
            <ParallaxLayer offset={2.1} speed={0.5} factor={1}>
                <p style={{fontFamily:"'Berkshire Swash', cursive", fontSize:"clamp(1rem, 4vw, 4rem)"}}>A Chance Encounter (The Coffee Shop Meeting)</p>
            </ParallaxLayer>
            <ParallaxLayer offset={2.2} speed={1} factor={1}>
                <i style={{fontFamily:"'Corinthia', cursive", fontSize:"clamp(1rem, 3.5vw, 3rem)"}}>Background: A cozy coffee shop, warm lighting, the scent of freshly brewed coffee in the air.</i>
            </ParallaxLayer>
            <ParallaxLayer offset={2.3} speed={2.5} factor={1}>
                <p style={{fontFamily:"'Corinthia', cursive", fontSize:"clamp(2rem, 5vw, 6rem)"}}>
                    He walked in, scanning the room, heart pounding slightly. Would she really come? <br/>
                    He sat by the window, nervously stirring his coffee, eyes flickering to the door. <br/>
                    A sip of coffee. A glance at the clock. And then—there she was. <br/>
                    A nervous smile, an awkward hello, and soon, the world faded away as conversation flowed like a perfectly brewed espresso.
                </p>
            </ParallaxLayer>

            {/* Scene 2 */}
            <ParallaxLayer offset={3} speed={0.5} factor={1}>
                <p style={{fontFamily:"'Berkshire Swash', cursive", fontSize:"clamp(1rem, 4vw, 4rem)"}}>The Park Stroll & MTR</p>
            </ParallaxLayer>
            <ParallaxLayer offset={3.1} speed={1} factor={1}>
                <i style={{fontFamily:"'Corinthia', cursive", fontSize:"clamp(1rem, 3.5vw, 3rem)"}}>Background: A scenic park, golden sunlight filtering through the trees, a quiet escape from the city's rush.</i>
            </ParallaxLayer>
            <ParallaxLayer offset={3.3} speed={2.5} factor={1}>
                <p style={{fontFamily:"'Corinthia', cursive", fontSize:"clamp(2rem, 5vw, 6rem)"}}>
                    They met again, this time with more ease, more laughter. <br/>
                    Strolling beneath the rustling leaves, they shared stories—dreams, childhood memories, favorite movies. <br/>
                    Their walk ended at Jayanagar's MTR, where the aroma of delicious food filled the air. With their masala dosas, it wasn't just the food they savored—it was the warmth of each other's company, the laughter, and the unspoken connection that grew between them. <br/>
                    With every bite, they discovered more about each other, and with every smile, they knew they were meant to be—like their hearts had always been destined to find each other.
                </p>
            </ParallaxLayer>

            {/* Scene 3 */}
            <ParallaxLayer offset={4} speed={0.5} factor={1}>
                <p style={{fontFamily:"'Berkshire Swash', cursive", fontSize:"clamp(1rem, 4vw, 4rem)"}}>Families Unite</p>
            </ParallaxLayer>
            <ParallaxLayer offset={4.1} speed={1} factor={1}>
                <i style={{fontFamily:"'Corinthia', cursive", fontSize:"clamp(1rem, 3.5vw, 3rem)"}}>Background: A warm home setting, a table filled with food, laughter in the air.</i>
            </ParallaxLayer>
            <ParallaxLayer offset={4.3} speed={2.5} factor={1}>
                <p style={{fontFamily:"'Corinthia', cursive", fontSize:"clamp(2rem, 5vw, 6rem)"}}>
                    The real test—family approval. <br/>
                    The nervous introductions turned into warm conversations. <br/>
                    Eyes met across the table, and in that moment, they knew—this was just the beginning. <br/>
                </p>
            </ParallaxLayer>

            {/* Scene 4 */}
            <ParallaxLayer offset={5} speed={0.5} factor={1}>
                <p style={{fontFamily:"'Berkshire Swash', cursive", fontSize:"clamp(1rem, 4vw, 4rem)"}}>Forever Begins</p>
            </ParallaxLayer>
            <ParallaxLayer offset={5.1} speed={1} factor={1}>
                <i style={{fontFamily:"'Corinthia', cursive", fontSize:"clamp(1rem, 3.5vw, 3rem)"}}>Background: A dreamy evening, soft lights, a hint of celebration in the air.</i>
            </ParallaxLayer>
            <ParallaxLayer offset={5.3} speed={2.5} factor={1}>
                <p style={{fontFamily:"'Corinthia', cursive", fontSize:"clamp(2rem, 5vw, 6rem)"}}>
                    From a coffee shop meeting to a life-changing journey, he had found his forever person. <br/>
                    Surrounded by loved ones, they are getting married, promising to love, cherish, and support each other through every moment. <br/>
                    Awaiting your presence as they embark on this new chapter of their lives. <br/>
                </p>
            </ParallaxLayer>

            {/* Beans coming from different directions */}
            <ParallaxLayer offset={1} speed={1.5} factor={0.2} horizontal>
                <img src="beans.png" style={{ width:'50vh', maxWidth:'400px', aspectRatio: '1/1', position: 'absolute', top: '15%', left: '10%' }} alt="bean1" />
            </ParallaxLayer>
            <ParallaxLayer offset={1.2} speed={1.5} factor={0.2} horizontal>
                <img src="beans.png" style={{ width:'50vh', maxWidth:'400px', aspectRatio: '1/1', position: 'absolute', top: '23%', right: '70%', transform: 'rotate(25deg)' }} alt="bean2" />
            </ParallaxLayer>
            <ParallaxLayer offset={1.4} speed={-2} factor={0.2} horizontal>
                <img src="beans.png" style={{ width:'50vh', maxWidth:'400px', aspectRatio: '1/1', position: 'absolute', top: '10%', left: '5%' }} alt="bean3" />
            </ParallaxLayer>
            <ParallaxLayer offset={1.4} speed={-0.3} factor={1} horizontal>
                <img src="beans.png" style={{ width:'50vh', maxWidth:'400px', aspectRatio: '1/1', position: 'absolute', top: '20%', right: '200%' }} alt="bean4" />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-1} factor={2.2} horizontal>
                <img src="beans.png" style={{ width:'50vh', maxWidth:'400px', aspectRatio: '1/1', position: 'absolute', top: '17%', left: '-20%', transform: 'rotate(40deg)' }} alt="bean5" />
            </ParallaxLayer>
            <ParallaxLayer offset={1.1} speed={-0.8} factor={2.2} horizontal>
                <img src="beans.png" style={{ width:'50vh', maxWidth:'400px', aspectRatio: '1/1', position: 'absolute', top: '25%', left: '-40%', transform: 'rotate(60deg)' }} alt="bean6" />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5} factor={2} horizontal>
                <img src="beans.png" style={{ width:'50vh', maxWidth:'400px', aspectRatio: '1/1', position: 'absolute', top: '21%', right: '10%' }} alt="bean7" />
            </ParallaxLayer>

            {/* <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button> */}
        </Parallax>
    )
};

export default Invite;
