import BaseLayout from '../components/layouts/BaseLayout';
import projects from '../data/projects';
import Card from '../components/Card';

export default function Portfolio() {
  return (
    <BaseLayout title='Portfolio'>
      <div className='portfolio boxed'>
        {projects &&
          projects.map((item, i) => (
            <Card
              key={i}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
              // @ts-ignore
              badges={item.badges || undefined}
              git={item.git || undefined}
            />
          ))}
      </div>
    </BaseLayout>
  );
}
