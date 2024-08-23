import BaseLayout from '../components/layouts/BaseLayout';
import experience from '../data/experience';
import Card from '../components/Card';

export default function Experience() {
  return (
    <BaseLayout title='Experience'>
      <div className='portfolio boxed'>
        {experience &&
          experience.map((item, i) => (
            <Card key={i} image={item.image} title={item.title} description={item.description} link={item.link} badges={item.badges} />
          ))}
      </div>
    </BaseLayout>
  );
}
