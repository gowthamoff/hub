/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Merchant/Branch/POS Common Module
 *
 *    Usage                  :  This File Contains Merchant/Branch/POS
 *                              Dynamically Card Set Quick-Navigation and
 *                              Reusable Components
 *
 *    Developed By and Date  :  Manikandan - 20-11-2023
 *
 *    Modified By and Date   :  Manikandan - 27-11-2023
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import { Card, Divider } from 'antd';
import { useEffect, useRef } from 'react';
import './style.scss';

const Contentnav = ({ navValue, inPage, activeSection, setActiveSection }) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        const visibleSection = entries.find(entry => entry.isIntersecting)?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 0.75
      }
    );
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach(section => {
        observer.current.unobserve(section);
      });
    };
  });

  const scroll2Section = elementRef => {
    elementRef.current.scrollIntoView();
  };

  return (
    <Card className="navigationContainer">
      <div className="navigationHeader">Quick Navigation</div>
      <div>
        {inPage.map(({ title, ref, section }, index) => {
          return (
            <div key={index}>
              <Divider style={{ marginTop: '0px', marginBottom: '0px', color: '#F5F5F5' }} />
              <div
                key={index}
                onClick={() => {
                  scroll2Section(ref);
                }}
                style={
                  activeSection == section
                    ? {
                        opacity: 1,
                        background: '#F0F2F5'
                      }
                    : { opacity: 0.6 }
                }>
                <div className="navigationTitle">{title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Contentnav;
