import React, { useState } from "react";
import Loading from '../../../Components/Loading'
import PageLayout from "../../Layout";
import { Container, Divider } from "@material-ui/core";
import PersonalInfo from "../Content/PersonalInfo";
import Objective from "../Content/Objective";
import Education from "../Content/Education";
import Skills from "../Content/Skills";
import WorkExperience from "../Content/WorkExperience";
import Project from "../Content/Project";
import {getUserResume} from '../../../Redux/Actions/profile'
import {updateResume} from '../../../API/UserRoutes'
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";




const Home=({userProfile,userResume,loading,getUserResume})=> {
  
  const [isEdit, setIsEdit] = useState({
    personal_info: false,
    project: false,
    work_experience: false,
    skill: false,
    objective: false,
    education: false,
  });
  

  const {_id} =userProfile
  const [profile, setProfile] = useState(userResume);
  
  const onSave = (name, val) => {
    setIsEdit({ ...isEdit, [name]: false });
    setProfile({ ...profile, [name]: val });
  };

    console.log(userResume);
    console.log(userProfile);
    
    
      // useEffect(()=>{
      //   getUserResume()
      // },[])
  
    const updateResumeOfUser=()=>{
      updateResume(profile,_id)
      .then(response=>{
        console.log(response)
        if(response.success){
          alert("Profile resume Updated")
          getUserResume()
        }
        else{
          alert('Failed to update your resume')
        }
      })
      .catch(error=>console.log(error))
    }


  return (
    
    <PageLayout>
      {loading ? 
      (<Loading></Loading>):  
      (<Container
        style={{
          backgroundColor: "#eff4f5",
          minHeight: "100vh",
          padding: "10px 50px",
        }}
        maxWidth="lg"
      >
        <PersonalInfo
          personal_info={profile.personal_info}
          isEdit={isEdit.personal_info}
          onEditChange={() =>
            setIsEdit({
              ...isEdit,
              personal_info: !isEdit.personal_info,
            })
          }
          onSave={onSave}
        />
        <Divider variant="fullWidth" />
        {profile.objective ? (
          <Objective
            objective={profile.objective}
            isEdit={isEdit.objective}
            onEditChange={() =>
              setIsEdit({
                ...isEdit,
                objective: !isEdit.objective,
              })
            }
            onSave={onSave}
          />
        ) : (
          ""
        )}
        <Divider variant="fullWidth" />
        {profile.education ? (
          <Education
            initialEducations={profile.education}
            isEdit={isEdit.education}
            onEditChange={() =>
              setIsEdit({
                ...isEdit,
                education: !isEdit.education,
              })
            }
            onSave={onSave}
          />
        ) : (
          ""
        )}
        <Divider variant="fullWidth" />
        {profile.skill ? (
          <Skills
            initialSkills={profile.skill}
            isEdit={isEdit.skill}
            onEditChange={() =>
              setIsEdit({
                ...isEdit,
                skill: !isEdit.skill,
              })
            }
            onSave={onSave}
          />
        ) : (
          ""
        )}
        <Divider variant="fullWidth" />
        {profile.work_experience ? (
          <WorkExperience
            initialWorkExperience={profile.work_experience}
            isEdit={isEdit.work_experience}
            onEditChange={() =>
              setIsEdit({
                ...isEdit,
                work_experience: !isEdit.work_experience,
              })
            }
            onSave={onSave}
          />
        ) : (
          ""
        )}

        {profile.project ? (
          <Project
            initialProjects={profile.project}
            isEdit={isEdit.project}
            onEditChange={() =>
              setIsEdit({
                ...isEdit,
                project: !isEdit.project,
              })
            }
            onSave={onSave}
          />
        ) : (
          ""
        )}
        <Button variant="contained" color="primary" onClick={updateResumeOfUser}>
          Update Resume
        </Button>
      </Container>
)}


          </PageLayout>
  );
}

const mapstateToProps=(state)=>({
  userProfile:state.profile.userProfile,
  loading:state.profile.loading,
  userResume:state.profile.userResume
})

export default connect(mapstateToProps,{getUserResume})(Home)