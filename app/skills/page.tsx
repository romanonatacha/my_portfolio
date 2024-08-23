import BaseLayout from '../components/layouts/BaseLayout';
import skills from '../data/skills';

export default function Skills() {
  return (
    <BaseLayout title='Skills'>
      <div className='boxed skills'>
        {/* <div className="items mb_hide">
            {skills && skills.map((item, i) => (
                <>
                    <input key={i} type="radio" name="switch-skill" id={item.name} />
                    <span>
                        <label name="switch-skill" htmlFor={item.name} className={`item ${item.class} font-md`}>{item.name}</label>
                    </span>
                </>
            ))}
            <div className="break"></div>
            <div className="chart margin-auto top24">
                <div className="bar bar-75 white">
                    <div className="face top">
                        <div className="growing-bar"></div>
                    </div>
                    <div className="face side-0">
                        <div className="growing-bar"></div>
                    </div>
                    <div className="face floor">
                        <div className="growing-bar"></div>
                    </div>
                    <div className="face side-a"></div>
                    <div className="face side-b"></div>
                    <div className="face side-1">
                        <div className="growing-bar"></div>
                    </div>
                </div>
            </div>
            <div className="info font-md light uppercase">click on the skills to see the level</div>
        </div> */}
        <div className='skills-levels default'>
          <div className='skills-box'>
            {skills &&
              skills.map((item, i) => (
                <div className='skill padding24' key={i}>
                  <span className='light uppercase default'>{item.name}</span>
                  <div>
                    <div className='chart2 margin-auto'>
                      <div className={`bar top16 ${item.bar}`}>
                        <div className='face'>
                          <div className='growing-bar'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
