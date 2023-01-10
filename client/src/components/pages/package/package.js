import React from 'react'
import { useParams } from 'react-router-dom';
import { packages } from '../../../data/data';
import About from './about';
import Details from './details';
import Testimony from "../../layouts/testimony"
import Tabs from "../../layouts/tabs"

const Packages = () => {
    let {name} = useParams();
    let packageType = packages.find((type) => type.path === name);
    
    return (
        <main className='pb-12 bg-gray'>
            <section className="bg-blue flex items-center justify-center">
                <div className="max-w-[1400px] mx-auto p-4 text-center text-white">
                    <h3 className='text-md'>Annual Contract Package</h3>
                    <h1 className="text-5xl sm:text-6xl mb-4">{packageType.name}</h1>
                </div>
            </section>
            <About packageType={packageType} />
            <Details packageType={packageType} />
            <Testimony />
            <section className='text-md p-4 text-blue mt-12 bg-white border-2 border-blue rounded-md mx-4 xl:mx-auto max-w-[1400px]'>
                <h2 className='text-3xl mb-8'>Terms and Condtions of Purchase</h2>
                <Tabs />
                <hr className="my-8"/>
                <h3 className="font-bold text-2xl mb-8">General Terms & Conditions</h3>
                <p className="mb-4">Vexpert Technical Services Est. reserves the right to refuse an order if it is deemed to require services beyond the reasonable scope indicated.</p>
                <p className="mb-4">No other obligations or services, either impressed, implied, or inferred, during any communications, is included in the charges unless detailed in the package option or in a formal quotation issued by Vexpert Technical Services Est.</p>
                <p className="mb-4">Vexpert Technical Services Est. may, at its discretion, make changes to the services and/or terms and conditions. Following any such changes that Vexpert Technical Services Est. considers to be material, the customer will be notified. By continuing to use Vexpert Technical Services Est. services after said changes are made, the customer is deemed to be expressly acknowledging their acceptance of the changes.</p>
                <p className="mb-4">During the contract period, should any damage to the customer’s property, assets or premises be found to be caused as a direct result of the service provided by Vexpert Technical Services Est. and/or due to failure to carry out contracted maintenance (unless such failure was caused or contributed to by the customer or a third party), the financial liability of Vexpert Technical Services Est. to the customer will be limited, to the extent permissible by law) to a maximum value of AED 5,000. To the extent permissible by law, Vexpert Technical Services Est. shall not be liable for any consequential, indirect or special loss whatsoever.</p>
                <p className="mb-4">These terms and conditions of purchase shall be governed and construed in accordance with the laws of the United Arab Emirates and party irrevocably submits to the exclusive jurisdiction of the courts of the Dubai International Financial Centre (DIFC).</p>
                <p className="mb-4">Should there be any changes to legislation applicable to the services provided, any necessary changes to the services and/or fees will be implemented as determined by Vexpert Technical Services Est. in order to comply with the new or revised legislation</p>
                <p>For all services there is no warranty on the materials unless specified /mentioned in advance of the services being carried out.</p>
            </section>
        </main>
    )
}

export default Packages;