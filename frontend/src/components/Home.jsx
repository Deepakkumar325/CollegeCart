import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    useEffect(() => {
        document.title = "CollegeCart";
       
    }, [])
 
    return (
        <>


        <div className="homepage">
            
            <div className="homepage_intro">
                <img src="./img/heading.png" alt="" className="homepage_intro_heading" />

                <p className="lead pb-4 fs-5">THE CAMPUS MARKET: UNITE, THRIVE, AND TRANSACT WITH EASE</p>

                {!localStorage.getItem('token') ?

                    <button type="button" className="btn btn-outline-info py-2 mx-1" id="start_button_explore" disabled>EXPLORE</button> :

                    <Link to="/marketplace"><button type="button" className="btn btn-outline-info py-2 mx-1" id="start_button_explore">EXPLORE</button></Link>}
                    {!localStorage.getItem('token') ?
                    <Link to="/login"><button type="button" className="btn btn-outline-info py-2 mx-1" id="start_button">LOGIN</button></Link> : ""}
            </div>
        </div>



            <div className="break container-fluid mb-5">
                <div>
                    
                    <h1 className="display-1 pb-2">ALL YOUR NEEDS IN ONE PLACE</h1>

                </div>
            </div>

            <div className="vision pt-5 mt-5" id="vision">
                <div className="container vision_intro my-5">
                    <h1 className="display-2">OUR VISION</h1>
                    <p className="lead fs-5">Empowering college students with a CollegeCart online marketplace to buy, rent, and request products, fostering affordability, sustainability, and community collaboration.</p>
                </div>

                
                <div className="vision_cards container my-5 flex-custom">
                    <div className="card px-4 py-4 mx-4 wh-custom-css">
                        <div className="card_heading text-center">
                            <h1>Accessibility</h1>
                        </div>
                        <div className="card_content ">
                            <p className="lead fs-5 ">Facilitates students, access to essential products, eliminating the need for off-campus travel or visiting multiple stores. It saves time and effort, benefiting students without transportation.</p>
                        </div>
                    </div>

                    <div className="card px-4 py-4 mx-4 wh-custom-css">

                    <div className="card_heading text-center">
                        <h1>Cost Savings</h1>
                    </div>

                    <div className="card_content">
                        <p className="lead fs-5 ">Students have the incredible opportunity to invest in textbooks, electronics, and other essential items they need to enhance their college experience,  allowing them to access the latest resources and technologies that are worth every penny.
                        </p>
                    </div>

                    </div>
                    
                    <div className="card px-4 py-4 mx-4 wh-custom-css">
                        <div className="card_heading text-center">
                            <h1>Waste Reduction</h1>
                        </div>

                        <div className="card_content">
                            <p className="lead fs-5">Promoting a circular economy within the campus community by facilitating , item sales and rentals. It fosters product reuse, recycling, and reduces waste and environmental impact.</p>
                        </div>

                    </div>

                </div>
                
                <div className="vision_cards container my-5 flex-custom" >
                    <div className="card px-4 py-4 mx-4 wh-custom-css">
                        <div className="card_heading text-center">
                            <h1>Convenience</h1>
                        </div>
                        <div className="card_content">
                            <p className="lead fs-5">Students are empowered with the ability to effortlessly discover the exact products they require, 
                                effortlessly compare prices, and seamlessly connect with reliable sellers or renters.</p>
                        </div>
                    </div>
                    <div className="card px-4 py-4 mx-4 wh-custom-css">
                        <div className="card_heading text-center">
                            <h1>Variety</h1>
                        </div>
                        <div className="card_content">
                            <p className="lead fs-5">Students consistently possess a wide range of unique needs and preferences, presenting an exciting
                                 opportunity to cater to their individuality and foster a truly inclusive learning environment.</p>
                        </div>
                    </div>
                    <div className="card px-4 py-4 mx-4 wh-custom-css">
                        <div className="card_heading text-center">
                            <h1>Efficiency</h1>
                        </div>
                        <div className="card_content">
                            <p className="lead fs-5">Students can enjoy a diverse and enriching shopping experience by exploring 
                                multiple physical stores or utilizing classified ads, avoiding inefficiencies along the way.</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="container team py-5" id="team">

                <div className="container team_intro my-5">
                    <h1 className="display-2">THE TEAM</h1>
                    <p className="lead fs-4">MEET THE TEAM!</p>
                </div>

            </div>

        </>
    )
}

export default Home
































