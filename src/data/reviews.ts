export interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  ownerReply?: string;
}

export const reviews: Review[] = [
  {
    name: "JAmez BRyan",
    date: "01/12/2024",
    rating: 5,
    text: "the ac wouldn't turn off, and I was worried about energy costs they resolved the issue quickly and ensured no other problems were present",
    ownerReply:
      "Thank you for your feedback, JAmez! We're glad to hear that our team was able to resolve the AC issue quickly and ease your concerns. Your satisfaction is our priority, and we appreciate your trust in us!",
  },
  {
    name: "Mary Wilhelm",
    date: "09/11/2024",
    rating: 5,
    text: "We were looking to replace our over thirty year old HVAC system on the home we purchased. After receiving four estimates, we decided to hire Justin with It's No Sweat Heating and Air. He came out to the house last week to give us a free estimate and gave us good information to be aware of when receiving other estimates. He recommended a heat pump system. He and his crew arrived yesterday and installed the new system in less than four hours. It works great so far and we are happy with the workmanship and professionalism of Justin and his staff. His prices are very reasonable, and he also guarantees his work for two years. We recommend using It's No Sweat.",
    ownerReply:
      "Thank you for your wonderful review, Mary! We're thrilled to hear that you had such a positive experience with Justin and our team. Your satisfaction with our workmanship and professionalism means a lot to us. We appreciate your recommendation and look forward to serving you again in the future!",
  },
  {
    name: "Hailey Mitchell",
    date: "25/09/2024",
    rating: 5,
    text: "I had Brian install a mini split unit in a shed I am converting to my office, not only did he give a fair price but he did AMAZING work. He communicated with me and my contractors through the whole process to make sure the project was done precisely. I am beyond happy with the overall product and will definitely be using this company again moving forward!!",
    ownerReply:
      "Thank you for your wonderful review, Hailey! We're thrilled to hear that Brian provided exceptional service and communication throughout your project. Your satisfaction means a lot to us, and we look forward to assisting you with future projects!",
  },
  {
    name: "Judy Baldovinos",
    date: "27/07/2024",
    rating: 5,
    text: "Taylor was recommended to us through a friend. We can't afford a new system just yet but he found a good used one. He and his brother have been going above and beyond to help us get our AC working. Thank y'all for working nonstop through the heat to make sure we are comfortable!!",
    ownerReply:
      "Thank you Judy we appreciate the review glad we were able to make that work so happy that you guys are cool for the summer!",
  },
  {
    name: "Sylvia Torrez",
    date: "19/07/2024",
    rating: 5,
    text: "We are extremely happy with our New AC. We would recommend No Sweat Heat & Air. Justin is efficient, honest and reliable. The whole process was stress-free and our AC works amazing. We truly appreciate Justin he provided us with a cost efficient quote, is kind and very knowledgeable.",
  },
  {
    name: "Derrick Fletcher",
    date: "29/06/2024",
    rating: 5,
    text: "I had been searching for over a year to replace a leaky r22 system. After spending some time speaking with Justin, I decided to pull the trigger. He was honest and knowledgeable, and his prices were very reasonable. I'm happy with the system. It does a great job at dehumidifying the space, making my family and I feel comfortable and cool in these warmer summer months.",
    ownerReply:
      "Hi Derek, thanks for the awesome review. I always appreciate hearing things like this. Makes the job worth it!",
  },
  {
    name: "Jazmine Tobias",
    date: "28/06/2024",
    rating: 5,
    text: "They did an amazing job with taking out our old stuff (Hvac and AC) and replacing it with a nicer and better one. Always explained how everything works and even checked our attic for our ducts. It was great! We were in good hands for our heat and air. Thank you again!",
    ownerReply:
      "Enjoy your new heat pump system, going to be way more energy efficient. Stay cool this summer!",
  },
  {
    name: "Darlene R.",
    date: "17/06/2024",
    rating: 5,
    text: "I recently had No Sweat Heating and Air replace two of my air conditioning units, and the experience was exceptional! The entire team was highly professional, arriving on time and completing the job efficiently. They were knowledgeable, explained the process clearly, and ensured everything was functioning perfectly before they left. The quality of their work was top-notch, and they left my home spotless. Their customer service was outstanding, with follow-ups to ensure my satisfaction. I couldn't be happier with their service. I highly recommend No Sweat Heating and Air for any HVAC needs. Five stars!",
    ownerReply:
      "We always appreciate a great review! Thank you so much for taking the time out of your day to write that as we always try our best and we try to provide excellent service",
  },
  {
    name: "Eric Chiang",
    date: "22/05/2024",
    rating: 5,
    text: "Justin has been extremely communicative, friendly and really well priced. Him and his crew (Taylor & Tony) came in very soon after I had reached out, and got the job done in a few hours. Even talked me through the nest they installed as well as maintenance for the unit. Would recommend!",
    ownerReply: "Great to hear Eric enjoy the new system!",
  },
  {
    name: "Annette Sandoval",
    date: "07/05/2024",
    rating: 5,
    text: "My husband and I had been dealing back and forth with another Heating and air company that was sent to us by our warrant company. They kept telling us that we needed to change the duct work and kept quoting us an extremely crazy amount to have the issue with our unit fixed. We had saw that something was causing a leak in our furnace/evap unit causing staining in our ceiling. We had No sweat come out and Justin quickly noticed that all that was needed was for a pipe to be unblocked and sealed. It took less than 30 min to fix and was very inexpensive. We will definitely be calling Justin in the future for any new issues. We really appreciated the integrity of the work and honesty and how knowledgeable Justin was.",
    ownerReply: "Glad it was an easy fix! Happy to help",
  },
];
