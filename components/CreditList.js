import SingleCredit from "./Content/SingleCredit"

const CreditList = (props) => {
    return (
        <>
            <div className="w-full pb-20 flex flex-wrap">
                <SingleCredit src="/JHus.jpg">
                    <p>J Hus</p>
                    <p className="text-shapeshift">Big Conspiracy</p>
                    <p>Recording Engineer</p>
                </SingleCredit>
                <SingleCredit src="/GlassAnimals.jpg">
                <p>Glass Animals</p>
                    <p className="text-shapeshift">Space Ghost Coast to Coast ft. Bree Runway</p>
                    <p>Recording Engineer</p>
                </SingleCredit>
                <SingleCredit src="/Jungle.jpg">
                <p>Jungle</p>
                    <p className="text-shapeshift">Loving In Stereo</p>
                    <p>Assistant Mixing Engineer</p>
                </SingleCredit>
                <SingleCredit src="/Brockhampton.jpeg">
                <p>Brockhampton</p>
                    <p className="text-shapeshift">Roadrunner</p>
                    <p>Assistant Recording Engineer</p>
                </SingleCredit>
                <SingleCredit src="/YouMeAtSix.jpg">
                <p>You Me At Six</p>
                    <p className="text-shapeshift">SUCKAPUNCH</p>
                    <p>Assistant Recording Engineer</p>
                </SingleCredit>
                <SingleCredit src="/SamFender.webp">
                <p>Sam Fender</p>
                    <p className="text-shapeshift">Hypersonic Missiles</p>
                    <p>Assistant Mixing Engineer</p>
                </SingleCredit>
                <SingleCredit src="/TheDualers.jpg">
                <p>The Dualers</p>
                    <p className="text-shapeshift">Palm Trees & 80 Degrees</p>
                    <p>Recording Engineer</p>
                </SingleCredit>
                <SingleCredit src="/AmyMacdonald.jpg">
                <p>Amy Macdonald</p>
                    <p className="text-shapeshift">The Human Demands</p>
                    <p>Assistant Mixing Engineer</p>
                </SingleCredit>
                <SingleCredit src="/LoungeAtTheEdgeofTown.jpg">
                <p>Turin Brakes </p>
                    <p className="text-shapeshift">Lounge at the Edge of Town</p>
                    <p>Recording Engineer</p>
                </SingleCredit>
                <SingleCredit src="/BadSounds.jpeg">
                <p>Bad Sounds</p>
                    <p className="text-shapeshift">Escaping from a Violent Time, Vol 1.</p>
                    <p>Assistant Mixing Engineer</p>
                </SingleCredit>
                <SingleCredit src="/BigImageCrop.png">
                <p>Big Image</p>
                    <p className="text-shapeshift">Human Touch Is Forever </p>
                    <p>Assistant Recording Engineer</p>
                </SingleCredit>
                <SingleCredit src="/Octavian.jpg.webp">
                <p>Octavian</p>
                    <p className="text-shapeshift">Endorphins</p>
                    <p>Recording Engineer</p>
                </SingleCredit>
                <SingleCredit src="/TheDualers2.jpg">
                <p>The Dualers</p>
                    <p className="text-shapeshift">Voices From The Sun</p>
                    <p>Recording Engineer</p>
                </SingleCredit>
                <SingleCredit src="/EveryoneYouKnow.webp">
                <p>Everyone You Know</p>
                    <p className="text-shapeshift">Just For The Times</p>
                    <p>Assistant Mixing Engineer</p>
                </SingleCredit>
                <SingleCredit src="/Hapennies.jpg">
                <p>The Ha’pennies</p>
                    <p className="text-shapeshift">Borsalino Hat Test</p>
                    <p>Recording & Mix Engineer</p>
                </SingleCredit> 
                
            </div>
        </>
    )
}


export default CreditList