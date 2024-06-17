import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../AuthSlice'
import BannerSlice from '../BannerSlice'
import TrainerSlice from '../TrainerSlice'
import TestimonialSlice from '../TestimonialSlice'
import ServicesSlice from '../ServicesSlice'
import BlogSlice from '../BlogSlice'
import BlogDetailsSlice from '../BlogDetailsSlice'
import ServiceDetailsSlice from '../ServiceDetailsSlice'
import BookingSlice from '../BookingSlice'
import BookServicesSlice from '../BookServiceSlice'

export const store = configureStore({
  reducer: {

    auth : AuthSlice,
    banner : BannerSlice,
    trainer : TrainerSlice,
    testimonial : TestimonialSlice,
    service : ServicesSlice,
    blog : BlogSlice,
    blogDetails : BlogDetailsSlice,
    serviceDetails : ServiceDetailsSlice,
    booking : BookingSlice,
    bookservices : BookServicesSlice,
    
  },
})