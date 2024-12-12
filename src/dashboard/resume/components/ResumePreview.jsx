import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import SummryPreview from './preview/SummryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

function ResumePreview() {

  const {resumeInfo, setResumeInfo}=useContext(ResumeInfoContext);
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
      borderColor:resumeInfo?.themeColor
    }}
    >
      {/* prsonal detail  */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summry */}
      <SummryPreview resumeInfo={resumeInfo}/>
      {/* Professional Experience */}
      <ExperiencePreview resumeInfo={resumeInfo}/>
      {/* Educational */}
      <EducationalPreview resumeInfo={resumeInfo}/>
      {/* Skills */}
      <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview