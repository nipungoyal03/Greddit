# GREDDIT

## Instructions to Run:

To start the backend server, run:
```
cd backend
npm i
npm start
```

To start the website, run:
```
cd frontend
npm i
npm start
```

go to http://localhost:3000/ to access the website.

This website is a clone of Reddit. A user can register on the website. After registration, he will be redirected to the login page. He can login with the credentials that he created.

## SubGREDDITS

SubGREDDITS are like threads on Reddit. A user can start a SubGREDDIT, which will then be shown to all the users, who can then join the SubGREDDIT to be able to post in that. 

## Joining

Different users can send join requests to a SubGREDDIT, which will be sent to the moderator (the creator) of the SubGREDDIT. If the moderator approves the request, then the user is allowed to join the SubGREDDIT. A user can ask to join a SubGREDDIT again if he is removed from it.

## Leaving

Users can leave the SubGREDDITS that they have not created. But once a user decides to leave a SubGREDDIT, then he cannot join it again, because he will be blocked from the SubGREDDIT (forever).

## Reporting

If a user finds a post on a SubGREDDIT to be inappropriate, then he can report it. All reports are sent to the moderator of the SubGREDDIT, who will decide what will be done with the post. Moderator can do one of the three things with the post:
* Delete it
* Ignore the repot
* Block the user who posted

If the report is ignored, no changes are made. 

## Saving Posts

Every user who is a part of a SubGREDDIT can save some posts for future reference. This can be done by clicking on the "Save" button next to each post. The saved posts can be seen in the "Saved Posts" section accessible through the Navbar, where one can delete the saved post also.

## Searching SubGREDDITS

There is a search bar on the SubGREDDIT page, which can help filter SubGREDDITS based on their name. In addition, there are options for sorting the SubGREDDITS by name and date of creation.
