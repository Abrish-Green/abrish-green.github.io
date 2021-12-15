import './contact.css';
import Phone from '../../img/phone.png'
import Email from '../../img/mail.png'
import Address from '../../img/address.png'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ()=>{

    const [complete,isComplete] = useState(false)
    const [sending,isSending] = useState(false)
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        let stop = true;
    if(!form.current.to_name.value) {
        stop =false;
        form.current.to_name.style = 'border:  1px solid red;'}
    if(!form.current.user_subject.value) {
        stop=false;
        form.current.user_subject.style = 'border:  1px solid red;'}
    if(!form.current.from_name.value) {
        stop=false;
        form.current.from_name.style = 'border:  1px solid red;'}
    if(!form.current.message.value) {
        stop=false;
        form.current.message.style = 'border:  1px solid red;'}
        if(!stop){
            return false;
        }
        isSending(true)
        isComplete(false)
        emailjs.sendForm('service_b84ak9r', 'template_bede3zk', form.current, 'user_lINY3VkSgOq3Dn4Av7SEL')
          .then((result) => {
              console.log(result.text);
             
              if(result.text === 'OK'){
                  isSending(false)
                  isComplete(true)
              }
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className="c">
            <div className="c-bg"></div>
                <div className="c-wrapper">
                <div className="c-left">
                       <h1 className="c-title">Let's disscus your project</h1>
                            <div className="c-info-item">
                                <img src={Phone} alt="" className="c-icon" /> +251932871492 | +251932871412
                            </div>
                            <div className="c-info-item">
                                <img src={Email} alt="" className="c-icon" /> Abrham365muche@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img src={Address} alt="" className="c-icon" /> Addis Ababa, Ethiopia
                            </div>
                </div>
                <div className="c-right">
                    <div className="c-desc">
                        <b>What's your story?</b>
                        Get in Touch. Always Freelancing if the right project comes along.
                    </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" placeholder="Name" name="to_name" />
                            <input type="text" placeholder="Subject" name="user_subject" />
                            <input type="text" placeholder="Email" name="from_name" />
                            <textarea type="text" placeholder="Message" name="message" />
                             <button >Submit</button>
                            {
                                complete &&   <p className="c-completed">Message has been sent Successfully.I will get back to you soon.</p> }
                            {
                                sending &&  <p className="c-loading" disabled>Sending...</p>  
                            }

                        </form>
                </div>        
                </div>

        </div>
    )
}


export default Contact