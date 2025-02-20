import React from 'react';
import './Contact.css';
import ContactImage from '../../assets/contact/contact.jpg';

export default function Contact() {
  return (
    <>
        <section id="contact">
            <div className="container">
                <div className="contact_wrapper">
                    <div className="contact_col">
                        <div className="contact_image">
                            <img src="https://st.depositphotos.com/1000423/1637/i/450/depositphotos_16370285-stock-photo-hand-pushing-on-a-touch.jpg" alt="Contact" style={{height:"40rem",width:"40rem"}}/>
                        </div>
                    </div>
                    <div className="contact_col">
                        <h2>Contact US</h2>
                        <form>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Name..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Phone..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="email" className="form-control" placeholder="Your Email..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <textarea placeholder="Write a Message..."></textarea>
                            </div>
                            <div className="btn_wrapper">
                                <button type="submit" className="btn">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
