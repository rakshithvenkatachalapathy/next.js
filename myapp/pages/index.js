import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Image from "next/image";
import { Text , Button } from "@geist-ui/react"

export default function Home() {
  return(
    <div>
      <Head>
        <title>
          Web dev news
        </title>
        <meta name='keywords' content='web devlopment programming' />
        
      </Head>
      <div className = "navbar"> 
                    <div className = 'text_interest'> <strong>  PrimeTime </strong> </div>
                    <div className = "home"> <strong> <a href="/" id="link"> home </a> </strong></div>

                </div>
      <div className = "userDisplayInfo">
              <div className="profilePic">
                  {/* Profile image goes here*/}
                  <Image
                className="graphic1"
                src="/images/15145.png"
                alt="Loading"
                width="100%"
                height="100%"
              ></Image>
              </div>
              <div className="userDetails">
                <Text small> User Name </Text> {/* comes in from the database */}
                <br></br>
                <Text small> Location</Text> {/* comes in from the database */}
              </div>
        </div>
      <div className="userButtons">
      <Button type="success" size="large" style={{ color: '#95E0D2', marginRight: '50px'}} ghost>Follow</Button>
      <Button type="success" size="large" style={{ color: '#95E0D2'}} ghost>Message</Button>
      </div>

     
    </div>
  )
}
