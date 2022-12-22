import React from 'react';
import compose from './compose.jpg';
import compose1 from './compose1.jpg';

function Content() {
    return (
        <div>
            <div class="card mb-3" style={{ 'maxWidth': '1265px' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={compose1} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Organic Manure</h5>
                            <p class="card-text">Organic manures increase the organic matter in the soil. Organic matter in turn releases the plant food in available from for the use of crops. However, organic manures should not be seen only as carriers of plant food.These manures also enable a soil to hold more water and also help to improve the drainage in clay soils. 
                            The nutrient content of organic manures is highly variable from place to place, lot to lot, and method of preparation. The composition of fertilizers is almost constant. For example, urea contain 46% N regardless of which factory makes it any where in the world. </p>
                            <p class="card-text"><small class="text-muted">Last updated 3 days ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{ 'maxWidth': '1265px' }}>
                <div class="row g-0">

                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"> Decompose</h5>
                            <p class="card-text">Composting is a managed process which utilizes microorganisms naturally present in organic matter and soil to decompose organic material. These microorganisms require basic nutrients, oxygen, and water in order for decomposition to occur at an accelerated pace. The end-product, compost, is a dark brown, humus-like material which can be easily and safely handled, stored, and used as a valuable soil conditioner. The composting process is dependent upon several factors, including: the population of microorganisms, carbon to nitrogen ratio, oxygen level, temperature, moisture, surface area, pH, and time.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 days ago</small></p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src={compose} class="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;