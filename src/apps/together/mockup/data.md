---
layout: layout.hbs
---

# Data Model
There will be three different objects that form that data model, Users, Klustrs, and Items. These will have the following attributes:

### Users:
* id
* username
* userimage
* klustrs [klustrIDs]
* items [itemIDs]
* favoriteKlustrs [klustrIDs]
* favoriteItems [itemIDs]

### Klustrs:
* id
* name
* description
* image
* favorites [userIDs]
* items [itemIDs]
* collaborators [userIDs]
* comments [userIDs]

### Items:
* id
* mediaURL
* media
* favorites [userIDs]
* klustr [klustrID]
* user [userID]
* comments [userIDs]

---

# Revisions
I had to change the klustr view page from a single column list of items to a carousel slider format.

#### Concurrency
Users will be able to see items appear in Klustrs as they are created. Comments will appear in realtime and notification badges will update in realtime to notify users when new updates are available.


