// AddResume.jsx
import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreate = () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    GlobalApi.CreateNewResume(data)
      .then((resp) => {
        if (resp?.data?.data?.documentId) {
          navigate(`/dashboard/resume/${resp.data.data.documentId}/edit`);
        } else {
          console.error("Unexpected response structure:", resp);
        }
      })
      .catch((error) => {
        console.error("Error creating resume:", error);
      })
      .finally(() => {
        setLoading(false);
        setOpenDialog(false);
      });
  };

  return (
    <div>
      <div
        className="p-14 py-24 border flex items-center justify-center bg-slate-100 rounded-lg h-[280px]
      hover:scale-105 transition-all hover:shadow-md border-dotted cursor-pointer"
        onClick={() => setOpenDialog(true)}
        aria-label="Create a new resume"
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Create a New Resume</DialogTitle>
            <DialogDescription>
              <span>Add a title for your new resume</span>
              <Input
                className="mt-2"
                placeholder="e.g., Full Stack Resume"
                value={resumeTitle}
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-2 mt-4">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button disabled={!resumeTitle || loading} onClick={onCreate}>
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
