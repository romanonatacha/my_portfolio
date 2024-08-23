import BaseLayout from './components/layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout title='Natacha Romano' pageClass='index'>
      <div className='boxed'>
        <div className='typewriter default'>
          <h2>front-end developer</h2>
          <h2>software engineer</h2>
          <h2>css specialist</h2>
          <h2>web designer</h2>
        </div>
        <img className='rocket' src='/images/rocket.svg' />
      </div>
    </BaseLayout>
  );
}
