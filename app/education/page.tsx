import education from '../data/education';
import BaseLayout from '../components/layouts/BaseLayout';
import Card from '../components/Card';

export default function Education() {
  return (
    <BaseLayout title='Education'>
      <div className='portfolio boxed'>
        {education &&
          education.map((item, i) => <Card key={i} image={item.image} title={item.title} description={item.description} badges={item.badges} />)}
      </div>
    </BaseLayout>
  );
}
