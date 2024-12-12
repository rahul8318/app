import React from 'react';

function SkillsPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2 "
        style={{
          color: resumeInfo?.themeColor || '#000', // Fallback for themeColor
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor || '#000', // Fallback for themeColor
        }}
      />

      {resumeInfo?.skills?.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 my-4">
          {resumeInfo.skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <h2 className="text-xs">{skill?.name || 'Skill Name Not Available'}</h2>
              <div className="h-2 bg-gray-200 w-[120px] rounded-md">
                <div
                  className="h-2 rounded-md"
                  style={{
                    backgroundColor: resumeInfo?.themeColor || '#000', // Fallback for themeColor
                    width: `${(skill?.rating || 0) * 20}%`, // Ensure rating is a number and convert to percentage
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xs text-gray-500">No skills added yet.</p>
      )}
    </div>
  );
}

export default SkillsPreview;
