import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggenIn={firstName:'kyroies',
    lastName:'Davied',
    email:'abdelmessehgaber1968@gmail.com'
  
  }
  return (
  <section className='home'>
    <div className='home-content'>
      <header className='home-header'>
       
       <HeaderBox
       type="greeting"
       title="welcome"
       user={loggenIn?.firstName || 'Guest'}
       subtext="access and mange your account and transactions efficiently" 
       />
       <TotalBalanceBox
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={1000.23}
       
       />
      </header>
    </div>
      <RightSideBar
      user={loggenIn}
      transactions={[]}
      banks={[{currentBalance:124.23},{currentBalance:125.67}]}

      />
  </section>
  )
}

export default Home