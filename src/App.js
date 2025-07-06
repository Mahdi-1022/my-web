import myimage from './logo.svg'
import './App.css';
import './App2.css';
import computer from './computer.png'
import intelligence from './intelligence.jpg'
import worker from './worker.jpg'
import call from './call.jpg'
import telegram from './telegram.jpg'
import telegram2 from './telegram2.jpg'
import email from './email.jpg'
import email2 from './email2.jpg'
import { useState , useEffect } from 'react';

function App() {

  const[x,setx]=useState("")

  function cal(val){
    setx((prevValue) => prevValue + val);
  }

  return (
    <div className="App">
      <div className='bar'>
        <div className='info'>
          <img src={myimage} className='mypic'/>
          <h4>محمد مهدی</h4>
        </div>
        <div className='list'>
          <p  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>خانه</p>
          <p  onClick={() => window.scrollTo({ top: 750, behavior: 'smooth' })}>درباره من</p>
          <p  onClick={() => window.scrollTo({ top: 1255, behavior: 'smooth' })}>خدمات</p>
          <p  onClick={() => window.scrollTo({ top: 1808, behavior: 'smooth' })}>نمونه کار</p>
          <p  onClick={() => window.scrollTo({ top: 3000, behavior: 'smooth' })}>ارتباط با من</p>
        </div>
        <div className='bar-line'></div>
        <div className='q-connection'>
          <a href="#">
            <img src={email2} className='bar-logo'/>
          </a>
          <a href="#">
            <img src={telegram2} className='bar-logo'/>
          </a>
          <a href="#">
            <img src={call} className='bar-logo'/>
          </a>
        </div>
      </div>
      <div className='base'>
        <div className='home'>
          <img src={myimage} className='mypic'/>
          <div className='small-line'>
            <div className="animated-line"></div>
          </div>
          <p>!سلام</p>
          <h2>به مینی سایت شخصی من خوش آمدید</h2>
        </div>
        <div className='line'></div>
        <div className='about-me'>
          <div className='topic'>
            <h1>درباره من</h1>
          </div>
          <h3>نام و نام خانوادگی : محمد مهدی مهدویان فر</h3>
          <h3>سن : 19</h3>
          <h3> رشته تحصیلی : ریاضی</h3>
          <h3>حرفه : برنامه نویسی فرانت</h3>
          <h3>علایق : رانندگی , گیتار ,  فوتبال و برنامه نویسی </h3>
          <h3>javascript - HTML - css - wordpress - photoshop - git & github - react : مهارت ها</h3>
        </div>
        <div className='line'></div>
        <div className='services'>
          <div className='topic'>
            <h1>مهارت های من</h1>
          </div>
          <div className='service-class'>
            <img src={computer} className='service-logo'/>
            <h4>front end  برنامه نویس</h4>
            <p>من یک کارآموز برنامه نویس هستم که تمایل بسیاری به یادگیری آن دارم</p>
          </div>
          <div className='service-class'>
            <img src={worker} className='service-logo'/>
            <h4>روحیه و کار تیمی بالا</h4>
            <p>به سادگی با دیگران هماهنگ میشوم و در بخش های مختلف حداکثر مشارکت را به اجرا میگزارم</p>
          </div>
          <div className='service-class'>
            <img src={intelligence} className='service-logo'/>
            <h4>انعطاف پذیری در انجام کار ها</h4>
            <p>در کار مشابه دیگری همچون فتوشاپ و وردپرس میتوانم کمک حال شرکت باشم</p>
          </div>
        </div>
        <div className='line'></div>
        <div className='resume'>
          <div className='topic'>
            <h1>رزومه کاری من</h1>
          </div>
          <p>بنده در حال حاضر رزومه کاری در شرکتی را ندارم اما چندین پروژه کوچک به عنوان نمونه کار وجود دارد که یکی از آنها را در بخش زیر به شما معرفی خواهم کرد:</p>
          <div className='calculator'>
            <div className='result'>
              <h4>{x}</h4>
            </div>
            <button onClick={() => setx("")} id='reset'>reset</button>
            <button onClick={() => cal("1")}>1</button>
            <button onClick={() => cal("2")}>2</button>
            <button onClick={() => cal("3")}>3</button>
            <button onClick={() => cal("4")}>4</button>
            <button onClick={() => cal("5")}>5</button>
            <button onClick={() => cal("6")}>6</button>
            <button onClick={() => cal("7")}>7</button>
            <button onClick={() => cal("8")}>8</button>
            <button onClick={() => cal("9")}>9</button>
            <button onClick={() => cal("+")}>+</button>
            <button onClick={() => cal("0")}>0</button>
            <button onClick={() => cal("-")}>-</button>
            <button onClick={() => cal("*")}>*</button>
            <button onClick={() => cal("/")}>/</button>
            <button onClick={() => setx(eval(x))}>submit</button>
          </div>
          <h3>لطفا برای دیدن نمونه کار صفحه را به حالت تمام دسکتاپ در بیاورید</h3>
          <h2>این یک ماشین حساب ساده است که چهار عمل اصلی را انجام میدهد</h2>
        </div>
        <div className='line'></div>
        <div className='connection'>
          <div className='topic'>
            <h1>نحوه ارتباط با من</h1>
          </div>
          <div className='connection-class'>
            <img src={email} className='connection-logo'/>
            <h4>mahdavianfar25@gmail.com</h4>
            <p>ایمیل</p>
          </div>
          <div className='connection-class'>
            <img src={telegram} className='connection-logo'/>
            <h4>@mahdi10_22</h4>
            <p>تلگرام</p>
          </div>
          <div className='connection-class'>
            <img src={call} className='connection-logo'/>
            <h4>+98915 050 0144</h4>
            <p>شماره تماس</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
