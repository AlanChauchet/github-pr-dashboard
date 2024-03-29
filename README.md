# PR Dashboard

Follow your team's PRs status

## How it works

This dashboard will automatically fetch inside the selected repositories of your organisation:
- PRs where a review of at least one user is requested
- Filter out PRs with the selected tags (i.e WIP)
- Automatically scroll down the list of PRs

PRs are displayed differently depending on their age:
- New PRs have a `new` badge when they are less than {hoursUntilNotNew} old
- {daysBeforeWarning} day old PRs are displayed in orange
- {daysBeforeCritical} day old PRs are displayed in red

Mergeable PRs are displayed in green, no matter their age.

PRs which does not require additional review can be filtered 

PRs are ordered from oldest to newest and are clickable.

## Configuration

| URL param | description | default value |
|---|---|---|
| token | [the github token used to make the requests](#how-to-get-a-github-token) | none |
| repositories | comma separated list of repositories names you wish to follow | none |
| filteredTags | comma separated list of tags you wish to exclude from the dashboard | none |
| requiredTags | comma separated list of tags you wish to mark as required to display | none |
| daysBeforeWarning | number of days before a PR turns into "warning" (orange) | 1 |
| daysBeforeCritical | number of days before a PR turns into "critical" (red) | 2 |
| hoursUntilNotNew | number of hours before a PR does not have the `new` badge anymore | 2 |
| minNbReviews | number of PR validations required to be considered mergeable | 2 |
| onlyNotReviewed | display only PR which lacks required number of validations and that you did not already validate | true |
| autoScroll | enable the auto-sroll or not (use it to display on a TV) | false |

Example: https://github.io/pr-dashboard/?token=YOUR_GITHUB_TOKEN&organisation=yourOrg&repositories=myRepo,myOtherRepo&filteredTags=Stand%20by,WIP,dependencies&requiredTags=Waiting%20for%20review

### How to get a github token

Head to your [Github personal access tokens page](https://github.com/settings/tokens) and generate a new one.
