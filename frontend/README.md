# Frontend Overview

## Login Page
> This is the `Login page` of the Application where User `(student & teacher)` can get access of their `Dashboard`.

![Login Page](https://user-images.githubusercontent.com/91736791/216770387-3a90896c-b0a7-4031-9cb4-1035705e8a3d.png)

> ## Validation at Authentication
> * If user with that `email does not exists`,
> * If `password is wrong`,
> * On `successful login`, the user data is checked with server. If user's role is `teacher`, then user will be redirected to `Teacher Dashboard`. Similarly, `student` will be redirected to `Student Dashboard`.

![Alert Types](https://user-images.githubusercontent.com/91736791/216771367-e60e45fb-b300-4968-ba53-447320644328.png)

## Teacher Dashboard
> Here is `Teacher Dashboard`.

![TDash](https://user-images.githubusercontent.com/91736791/216771523-1beeea36-a140-48e9-95a5-fb0fadd89872.png)
> Teacher has access on,
> * `Assignments Tab` : Can view and create assignments.
> * `Submissions Tab` : Can view student's submissions.
> * `Students Tab` : Can view students data.

![TDash1](https://user-images.githubusercontent.com/91736791/216771947-22ee67d7-4cba-462d-8513-13167abb003a.png)
>* Teacher's `name`, `email` and `role`

![Profile](https://user-images.githubusercontent.com/91736791/216776807-da3aba23-9f89-4e7f-bbc3-e907a47dcba0.png)

## Teacher Dashboard - Assignments Tab
> Teacher can `View`, `Create`, `Delete` Assignments.

![AssignmentTeacher](https://user-images.githubusercontent.com/91736791/216776876-983eef58-48ff-410b-9f5c-36e476b8a004.png)

## Student Dashboard
> Student has access on,
> * `Assignments Tab` : Can view assignments and upload submissions.
> * `Grades Tab` : Can view the grades of their submissions.

![SDash](https://user-images.githubusercontent.com/91736791/216777051-3512d7f4-b54d-4d84-a4af-bf15eddc3b3e.png)

## Student Dashboard - Assignments Tab
> Student can `View` assignments, `Upload` & `Modify` their submissions.
> Also, Students can upload only those assignment which are in `Active` state.

![SdashA](https://user-images.githubusercontent.com/91736791/216777383-14901b39-3fd2-4fa0-8199-10b366821eab.png)

## Student Dashboard - Assignments Tab - Upload Action
> Students can put `content` and `title` of submission.

![Subm](https://user-images.githubusercontent.com/91736791/216777547-e9005c25-8531-4ca6-8fbc-26567fc0d7b7.png)

## Teacher Dashboard - Submissions Tab
> Teacher can `view submissions` submitted by students.
> Also, Teacher can `give grades` to the submissions.

![Tcheck2](https://user-images.githubusercontent.com/91736791/216777743-0596039f-4805-4667-816c-ef72646bf6d3.png)

## Teacher Dashboard - Submissions Tab - Give Grades Action
> Teacher can put `grades` for submission.

![GGrades](https://user-images.githubusercontent.com/91736791/216777907-f42d145c-9410-4f77-a51e-a9e85c22a166.png)

## Student Dashboard - Grades Tab
> Students can `view grades` given by teacher on their submission.

![TCheck](https://user-images.githubusercontent.com/91736791/216777660-f66ac8c8-481f-4b8f-9655-4c9322dfd0d5.png)
