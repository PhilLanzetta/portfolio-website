import React from "react"
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FaPeopleCarry } from '@react-icons/all-files/fa/FaPeopleCarry'
import { FaPencilRuler } from '@react-icons/all-files/fa/FaPencilRuler'
import { FaCogs } from '@react-icons/all-files/fa/FaCogs'
export default [
 {
  id: 1,
  icon: <FaHome className="service-icon" />,
  title: "store creation",
  text: `Looking to increase your sales by making your products available online? I'll build your eCommerce site from the ground up. On the front end, we'll achieve a look that suits your brand and functionality that keeps your customers coming back.  On the back end, we'll set up inventory, shipping policies, tax settings and everything you need to keep your operations running smoothly.`,
 },
 {
  id: 2,
  icon: <FaPeopleCarry className="service-icon" />,
  title: "platform migration",
  text: `Ready to take your online presence to the next level? If you already have a site on the web, I'll seamlessly migrate it from your current provider to Shopify.  You won't lose any of the work you've already put into creating your online presence and you'll gain all of the cutting edge features of Shopify's platform.`,
 },
 {
  id: 3,
  icon: <FaPencilRuler className="service-icon" />,
  title: "theme customization",
  text: `Struggling to make your current Shopify store stand out? With theme customization, I can tailor predefined themes to fit the unique considerations of your business.  Leave the coding to me, so that you can focus on better serving your customers.`,
 },
 {
  id: 4,
  icon: <FaCogs className="service-icon" />,
  title: "site optimization",
  text: `Looking to improve your site's performance? I'll perform a comprehensive audit and work to optimize your site's speed, accessibility, search engine results and conversion rates.`,
 },
]
