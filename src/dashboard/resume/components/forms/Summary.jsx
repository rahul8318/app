import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi'
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';


function Summary({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summery, setSummery] = useState()
  const [loading, setLoding] = useState(false)
  const params = useParams();
  useEffect(() => {
    summery && setResumeInfo({
      ...resumeInfo, summery: summery
    })
  }, [summery])
  // const GenrateSummeryFromAI=async()=>{
  //   setLoding(true)
  //   const PROMPT = prompt.replace('{jobTitle}',resumeInfo?.jobTitle);
  //   console.log(PROMPT);
    
  //   const result=await AIChatSession.sendMessage(PROMPT);
  //   console.log(result.response.text());
  //   setLoding(false)
  // }

  const onSave = (e) => {
    e.preventDefault()
    setLoding(true)
    const data = {
      data: {
        summery: summery
      }
    }
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(res => {
      console.log(res);
      enabledNext(true)
      setLoding(false)
      toast("Detail Updated.")

    }, error => {
      setLoding(false)
    })
  }
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Summary Detail</h2>
      <p className=''>Add Summary for your job title</p>

      <form className='mt-7' onSubmit={onSave}>
        <div className='flex justify-between items-end'>
          <label>Add Summary</label>
          <Button className="border-primary text-primary flex gap-2" type="button" size="sm" variant="outline"><Brain className='h-4 w-4' /> Genrate from Ai</Button>
        </div>
        <Textarea className="mt-5" required onChange={(e) => setSummery(e.target.value)} />
        <div className='mt-2 flex justify-end'>
          <Button type="submit"
            disabled={loading}>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
      </form> 
    </div>

  )
}

export default Summary