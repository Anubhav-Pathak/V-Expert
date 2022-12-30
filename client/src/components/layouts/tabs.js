import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ServiceTab = () => (
  <Tabs>
    <TabList>
      <Tab>Customer Obligations</Tab>
      <Tab>Home Maintenance Packages</Tab>
      <Tab>Call Outs</Tab>
      <Tab>Payment</Tab>
      <Tab>Cancellation</Tab>
    </TabList>

    <TabPanel>
        <ul className='mt-4 list-disc'>
            <li className='ml-8'>Ensure that a person in charge is present at the property throughout the service. if it is not present or delayed by the client, it must be considered completed vist/call out.</li>
            <li className='ml-8'>Provide water and electricity for all maintenance work being done.</li>
            <li className='ml-8'>Client / tenent Responsible for obtaining all required approvals and NOCs from local authority, building management, community management, etc. prior to commencement of services.</li>
            <li className='ml-8'>Remove all obstructions around the area to be serviced to allow safe access.</li>
            <li className='ml-8'>Bear any cost for any destructive access (such as cutting through ceiling plaster or panels) is required for delivery of the services.</li>
        </ul>
    </TabPanel>
    <TabPanel>
        <ul className='mt-4 list-disc'>
            <li className='ml-8'>The scope of services provided is defined as per the package description purchased as well as any additional options or variables selected during the order process.</li>
            <li className='ml-8'>Maintenance Services will be scheduled over a recurring 12-month period.</li>
            <li className='ml-8'>Preventive Maintenance - shall be performed after contract full payment completion.</li>
            <li className='ml-8'>Material not included in this package. Any material will be supplied on request, subject to additional charges. </li>
            <li className='ml-8'>Installation of any items / materials provided by the customer is their sole reponsible for its functionality , V-expert is not liable for failure or its related malfunctioning.</li>
            <li className='ml-8'>Any  service not expressly mentioned in our scope</li>
            <li className='ml-8'>Modification and or insulation work for piping, ducting and internal duct cleaning not included in this package , which may carried out as per customer request with additional cost.</li>
            <li className='ml-8'>Replacement of water or drainage lines in shafts, air wells, water pumps, pressure vessels, bladders, water tanks etc. not included in our package. which may carried out as per customer request with additional cost.</li>
            <li className='ml-8'>Roof or basement leakage due to water proofing failure of the structure not included in this package</li>
            <li className='ml-8'>Kitchen equipment/Audio visual equipment/Data and related components/Generators/Chilled water pumps or piping insulation/Garden Sprinkler/Irrigation systems and associated pumps and equipment/Swimming Pools not included in our package. which may carried out as per customer request with additional cost.</li>
        </ul>
    </TabPanel>
    <TabPanel>
        <ul className='mt-4 list-disc'>
            <li className='ml-8'>Any system that are associated with issues for which has previously provided the customer with a quote (that was not accepted) to fix the root cause of said issue will not be included as a complimentary call out and will be chargeable in full.</li>
            <li className='ml-8'><strong>Additional hours will be charged</strong> (excluding VAT) with <strong>AED 150 per hour</strong> (materials will be charged separately)</li>
            <li className='ml-8'>Vexpert Technical Services Est. will not be held responsible for any damage to the customer's property, in the intervening time between the receipt of the call out request by the customer, and the arrival of the expert team.</li>
        </ul>
    </TabPanel>
    <TabPanel>
        <ul className='mt-4 list-disc'>
            <li className='ml-8'>Fees due are as per the relevant maintenance package or applicable quotation our service cant provided.</li>
            <li className='ml-8'>Payments can be made via MasterCard or Visa credit cards, Cash or Bank Transfers (payable to Vexpert Technical Services Est.) prior to the commencement of services.</li>
            <li className='ml-8'>Should any payment fail to be made, the customer's account and all services will be suspended or discontinued until payment is cleared in full.</li>
            <li className='ml-8'>All payment transactions are to be made in AED only.</li>
            <li className='ml-8'>If the customer disputes any charge, it must notify Vexpert Technical Services Est. in writing no later than 5 working days from the date of the charge, invoice or quotation following which, both parties shall cooperate in good faith to resolve the issue promptly. If the customer fails to notify within said time period which considered as accepted.</li>
            <li className='ml-8'>The customer shall pay the Fees plus any applicable VAT.</li>
            <li className='ml-8'>Call out charges are non-refundable.</li>
            <li className='ml-8'>100% payment shall be collected prior to the commencement of services.</li>
        </ul>
    </TabPanel>
    <TabPanel>
        <ul className='mt-4 list-disc'>
            <li className='ml-8'>In the event that a scheduled visit needs to be cancelled by Vexpert Technical Services Est., the visit will be rescheduled at no extra cost to the customer.</li>
            <li className='ml-8'>The customer must give 48 hour's notice to cancel a scheduled visit upon which the customer will have 1 opportunity to reschedule the said visit within a 4-week period.</li>
            <li className='ml-8'>Customers using packages may cancel their package subscription with 90 days written notice to Vexpert Technical Services Est. Payments for the 90-day cancellation period will be due as normal.</li>
            <li className='ml-8'>Customers using packages that have paid for said package annually in advance may cancel their package at any time. First Preventive maintenance completed means 60% of contract cost not refundable, 90days notice period package cost not refundable. Balance can settle in mutual agreement.</li>
            <li className='ml-8'>Refundable amount shall be provided in cheque under the name of package ower.</li>
            <li className='ml-8'>Vexpert Technical Services Est. reserves the right to cancel any service or package at any time with immediate effect in the event that, (As per Vexpert Technical Services Est. management investigation) for any of any of the following: Abuse of staff/Fraud or misrepresentation/Misuse of the services/Inappropriate or improper conduct.</li> 
        </ul>
    </TabPanel>
  </Tabs>
);
export default ServiceTab;