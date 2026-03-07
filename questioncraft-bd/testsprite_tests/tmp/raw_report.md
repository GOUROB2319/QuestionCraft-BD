
# TestSprite AI Testing Report(MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** questioncraft-bd
- **Date:** 2026-03-06
- **Prepared by:** TestSprite AI Team

---

## 2️⃣ Requirement Validation Summary

#### Test TC001 Register a new user and reach verification page
- **Test Code:** [TC001_Register_a_new_user_and_reach_verification_page.py](./TC001_Register_a_new_user_and_reach_verification_page.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Terms/acceptance checkbox not found on the registration page; required step cannot be completed.
- Confirm password field is present but empty; registration requires confirming the password to proceed.
- Registration submit button ('নিবন্ধন করুন') was not activated and no navigation to '/verify' occurred, so verification step was not reached.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/941a2d17-c266-47a7-8745-bdea94c0a1e2
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC002 Register with existing email and short password shows validation error
- **Test Code:** [TC002_Register_with_existing_email_and_short_password_shows_validation_error.py](./TC002_Register_with_existing_email_and_short_password_shows_validation_error.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/53fd78bd-b7d5-45c7-8b6e-cec219818192
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC004 Dashboard loads for authenticated user and shows welcome + overview cards
- **Test Code:** [TC004_Dashboard_loads_for_authenticated_user_and_shows_welcome__overview_cards.py](./TC004_Dashboard_loads_for_authenticated_user_and_shows_welcome__overview_cards.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/a441d51d-fba3-4e1c-a76e-bd6fce645841
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC005 Quick action creates new paper route via 'নতুন প্রশ্নপত্র তৈরি করুন'
- **Test Code:** [TC005_Quick_action_creates_new_paper_route_via____.py](./TC005_Quick_action_creates_new_paper_route_via____.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/d5f34aa6-7258-4bb0-a7fa-9a9938925330
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC006 Sidebar navigation to প্রশ্ন ব্যাংক goes to Questions list
- **Test Code:** [TC006_Sidebar_navigation_to___goes_to_Questions_list.py](./TC006_Sidebar_navigation_to___goes_to_Questions_list.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Sidebar link 'প্রশ্ন ব্যাংক' not found on the dashboard page; no interactive element with that exact label is present in the sidebar.
- Navigation to '/questions' could not be verified because the 'প্রশ্ন ব্যাংক' sidebar link is missing.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/24e4633c-859f-4563-9944-406424fb2906
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC010 Invalid login does not allow access to dashboard
- **Test Code:** [TC010_Invalid_login_does_not_allow_access_to_dashboard.py](./TC010_Invalid_login_does_not_allow_access_to_dashboard.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/8193b50a-cba1-4e2b-a670-ff8dd194bb84
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC012 Create and save a Bengali MCQ question and verify confirmation + live preview update
- **Test Code:** [TC012_Create_and_save_a_Bengali_MCQ_question_and_verify_confirmation__live_preview_update.py](./TC012_Create_and_save_a_Bengali_MCQ_question_and_verify_confirmation__live_preview_update.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/1cc4ee7c-f621-49c2-a857-40daa4b7fadd
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC013 Validation: prevent saving when question text is empty
- **Test Code:** [TC013_Validation_prevent_saving_when_question_text_is_empty.py](./TC013_Validation_prevent_saving_when_question_text_is_empty.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/9f9e2c2a-071c-42f7-803e-dd9ea69d807a
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC014 Create a Bengali Short question and save successfully
- **Test Code:** [TC014_Create_a_Bengali_Short_question_and_save_successfully.py](./TC014_Create_a_Bengali_Short_question_and_save_successfully.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Transition from Step 1 to Step 2 did not occur: clicking 'পরবর্তী ধাপ' repeatedly returned the application to the dashboard instead of opening the question-adding UI.
- Subject draft save succeeded as indicated by the notification 'ড্রাফট হিসেবে রাখা হয়েছে।', but this did not enable navigation to Step 2.
- The validation message 'বিষয়ের নাম আবশ্যক' is displayed and is preventing progression, despite the subject draft being saved.
- The question-adding controls (to select question type, enter question text, set marks and difficulty) were never rendered, so no question could be created or saved.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/894f7275-4734-408d-a7ab-a7a283e806fd
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC017 Add a new question section, enter a second Bengali question, and save draft
- **Test Code:** [TC017_Add_a_new_question_section_enter_a_second_Bengali_question_and_save_draft.py](./TC017_Add_a_new_question_section_enter_a_second_Bengali_question_and_save_draft.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Draft saved notification not found after clicking 'ড্রাফট হিসেবে রাখুন'; the application redirected to /dashboard instead of showing a confirmation.
- The search for notification text returned 'ড্রাফট হিসেবে রাখুন', which matches the Save Draft button label, not a draft confirmation message.
- Both questions were added to the question list, but no visible 'Draft saved' (or equivalent Bengali confirmation) message was present on the UI after the save action.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/fe48efe7-7b4b-44f1-bb4f-f79e46122989
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC020 Search and filter questions by keyword, subject, and difficulty
- **Test Code:** [TC020_Search_and_filter_questions_by_keyword_subject_and_difficulty.py](./TC020_Search_and_filter_questions_by_keyword_subject_and_difficulty.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Questions list not found on the current page (/questions/create); the page displays the question creation form instead of a list of questions to filter.
- No navigation element to open the Questions listing page (/questions) was found on the current page, preventing access to the question list.
- Question list items are not present on the page, so keyword search behavior cannot be validated against visible results.
- Subject and difficulty filter controls (as distinct list filters) and corresponding question items are not present on the page, so their filtering effects cannot be tested.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/0f2bbf3a-cd5d-49a9-a106-de9b34673502
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC021 Search results update when a keyword is entered
- **Test Code:** [TC021_Search_results_update_when_a_keyword_is_entered.py](./TC021_Search_results_update_when_a_keyword_is_entered.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Main navigation 'Questions' opens the question creation page (/questions/create) instead of a Questions list, so the questions list cannot be reached via the expected navigation.
- Typing 'algebra' into the global search input produced no visible question results on the current page.
- No question list element or result entries were present on the page after performing the search, so the expected search-update behavior could not be validated.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/20a85a62-97c3-45ac-a5d0-cb2d6495e587
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC024 Edit a question and save successfully
- **Test Code:** [TC024_Edit_a_question_and_save_successfully.py](./TC024_Edit_a_question_and_save_successfully.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Editor pane did not open after clicking the Edit control; no editor fields or save/update button are present on the /papers page.
- No question papers exist on the page — the message 'আপনার কোনো প্রশ্নপত্র নেই' is displayed, so there is nothing to edit.
- 'Updated successfully' confirmation could not be observed because the editor was not accessible.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/ecb97c86-ffbb-478b-9ae8-5806911d3766
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC025 Edit a question content and confirm "Updated successfully" toast
- **Test Code:** [TC025_Edit_a_question_content_and_confirm_Updated_successfully_toast.py](./TC025_Edit_a_question_content_and_confirm_Updated_successfully_toast.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- No question papers exist on the dashboard: the UI displays 'এখনও কোনো প্রশ্নপত্র তৈরি করা হয়নি', so there are no items to edit.
- No 'Edit' action is available because there are no question cards listed under recent question papers or in the questions list.
- Cannot verify 'Updated successfully' because an editable question could not be found to perform the update and save operation.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/7569add7-77b9-438f-86bb-ff641b2d8617
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC026 Delete a question and confirm it is removed from the list
- **Test Code:** [TC026_Delete_a_question_and_confirm_it_is_removed_from_the_list.py](./TC026_Delete_a_question_and_confirm_it_is_removed_from_the_list.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- No question cards found on the dashboard; the page displays the message 'এখনও কোনো প্রশ্নপত্র তৈরি করা হয়নি', so there is nothing to delete.
- No 'Delete' button or control was found for any question card, preventing initiation of a delete action.
- Success toast for deletion could not be observed because the delete action could not be started (no deletable items present).
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/5d956241-5e32-48c8-90df-f26e9c2aa470
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC027 Create a new paper and open A4 preview with NCTB-style header and page numbers
- **Test Code:** [TC027_Create_a_new_paper_and_open_A4_preview_with_NCTB_style_header_and_page_numbers.py](./TC027_Create_a_new_paper_and_open_A4_preview_with_NCTB_style_header_and_page_numbers.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/7a137e15-7528-4e1a-b61f-d6d36d460984
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC028 Set paper metadata (title, subject, time, total marks) successfully
- **Test Code:** [TC028_Set_paper_metadata_title_subject_time_total_marks_successfully.py](./TC028_Set_paper_metadata_title_subject_time_total_marks_successfully.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/f42038a2-a892-4be9-a07c-dab5c84a7e82
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC029 Preview shows header and core sections after adding questions and metadata
- **Test Code:** [TC029_Preview_shows_header_and_core_sections_after_adding_questions_and_metadata.py](./TC029_Preview_shows_header_and_core_sections_after_adding_questions_and_metadata.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- ASSERTION: Created paper 'বাংলা ২য় পত্র' not present in the Papers list after creation.
- ASSERTION: Papers list displays the message 'আপনার কোনো প্রশ্নপত্র নেই', indicating no entries are available to preview.
- ASSERTION: Clicking the papers table row did not open a paper detail or preview view.
- ASSERTION: The paper is not found under 'খসড়া' (Drafts) or 'সব প্রশ্নপত্র' (All Papers) filters, so preview verification cannot proceed.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/003d1a4b-f5b2-4e71-a42c-155f76f2a33b
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC031 Validation: prevent save/export when title is blank
- **Test Code:** [TC031_Validation_prevent_saveexport_when_title_is_blank.py](./TC031_Validation_prevent_saveexport_when_title_is_blank.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Save as draft succeeded and the notification 'ড্রাফট হিসেবে রাখা হয়েছে।' was displayed even though the paper title/subject was empty.
- Expected the builder to block save/export actions when the title is missing, but saving as draft was permitted despite missing title.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/8ec06197-b8a1-4d50-b77b-fc6eb6cb252d
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC032 Validation message is visible for blank title and export is blocked
- **Test Code:** [TC032_Validation_message_is_visible_for_blank_title_and_export_is_blocked.py](./TC032_Validation_message_is_visible_for_blank_title_and_export_is_blocked.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/13b65c7d-3e3f-4caf-bb30-02439ea50dc7
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC035 Update institution in Settings and save successfully
- **Test Code:** [TC035_Update_institution_in_Settings_and_save_successfully.py](./TC035_Update_institution_in_Settings_and_save_successfully.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/48a09e04-3bc8-4212-8761-c803e0f83e2e
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC037 Change password successfully from Settings
- **Test Code:** [TC037_Change_password_successfully_from_Settings.py](./TC037_Change_password_successfully_from_Settings.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Password updated confirmation message not found on the settings page after clicking the update button.
- No success indicators ('Password updated', 'পাসওয়ার্ড আপডেট', 'সফল', 'success') are visible in the page content or UI after the update attempt.
- The change-password form remains visible with the entered current and new passwords, with no visible confirmation that the password was changed.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/2b6539bb-f0a2-4691-99c1-9d2a788e2e5e
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC038 Change password shows error when current password is incorrect
- **Test Code:** [TC038_Change_password_shows_error_when_current_password_is_incorrect.py](./TC038_Change_password_shows_error_when_current_password_is_incorrect.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Expected error message 'Current password incorrect' was not found on the Settings page after submitting the wrong current password.
- No visible inline error message or banner indicating the current password was incorrect was observed on the page.
- The current password input (index 770) contains 'WrongCurrentPass123' and the new password input (index 776) contains 'NewPassword!234', indicating the update was attempted but no validation error was shown.

- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/39c500f6-f138-4e1c-85e4-6014505737b5
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC042 Generate AI questions successfully and add generated items to the question bank
- **Test Code:** [TC042_Generate_AI_questions_successfully_and_add_generated_items_to_the_question_bank.py](./TC042_Generate_AI_questions_successfully_and_add_generated_items_to_the_question_bank.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- AI quick action 'AI দিয়ে তৈরি করুন' was not found on the Create Question page after opening the create panel, performing two scroll attempts, and using the page search input.
- The 'Generate' flow (and the 'Generated question list' UI) could not be reached because the AI quick action entry point is absent from the current page DOM or UI.
- Multiple UI interactions (open panel, scroll, search) did not reveal any controls, links, or buttons to trigger AI question generation, blocking completion of the test case.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/1c412c44-62a3-4310-9bc3-ad3b50d3b029
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC043 Generate AI questions successfully and add generated items to a paper
- **Test Code:** [TC043_Generate_AI_questions_successfully_and_add_generated_items_to_a_paper.py](./TC043_Generate_AI_questions_successfully_and_add_generated_items_to_a_paper.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- 'AI দিয়ে তৈরি করুন' quick action not found on the question creation page, preventing access to AI generation functionality.
- 'Generate' button or any AI question-generation controls are not present on the visible creation UI.
- Generated question list could not be verified because AI generation controls were not available.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/11f34b75-5bdf-4feb-aed0-2844489a712e
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC047 Add to question bank shows a success notification
- **Test Code:** [TC047_Add_to_question_bank_shows_a_success_notification.py](./TC047_Add_to_question_bank_shows_a_success_notification.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Add to question bank control not found on question creation or generation pages.
- AI generation quick action 'AI দিয়ে তৈরি করুন' not present in the question creation workflow after advancing steps.
- No generated questions are present on the page, so 'Add to question bank' could not be exercised.
- Success notification for adding to question bank could not be verified because the corresponding action is missing.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/fb90a2ec-c32d-45e2-bcae-3d5ba5a8d5da
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC048 Add to paper shows a success notification
- **Test Code:** [TC048_Add_to_paper_shows_a_success_notification.py](./TC048_Add_to_paper_shows_a_success_notification.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- AI quick action 'AI দিয়ে তৈরি করুন' not found on the Create Question page.
- 'Generate' button or other AI-generation controls are not present or visible on the page.
- 'Add to paper' action could not be executed because no generated questions or AI UI were available.
- Two attempts to locate the quick action (scroll + find) were performed and both failed.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/9989aeef-fd17-4493-a647-782c0f056b5b
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC003 Registration requires accepting Terms to proceed
- **Test Code:** [TC003_Registration_requires_accepting_Terms_to_proceed.py](./TC003_Registration_requires_accepting_Terms_to_proceed.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Terms checkbox not found on the registration page.
- Cannot verify that registration is blocked without accepting Terms because the Terms acceptance control or related text ('Terms') is missing from the page.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/a572e1ee-52e9-4a88-980b-712076cf3052
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC007 Sidebar navigation to Papers list from dashboard
- **Test Code:** [TC007_Sidebar_navigation_to_Papers_list_from_dashboard.py](./TC007_Sidebar_navigation_to_Papers_list_from_dashboard.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/5e09c14c-bdad-4eb4-ae34-d253e06a48b1
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC009 Dashboard shows recent activity section (if present) without errors
- **Test Code:** [TC009_Dashboard_shows_recent_activity_section_if_present_without_errors.py](./TC009_Dashboard_shows_recent_activity_section_if_present_without_errors.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/f5781162-41c8-484f-b74d-8aa806b5bd9c/89f4f49b-58f8-4466-91d8-83c23cd17c7d
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---


## 3️⃣ Coverage & Matching Metrics

- **40.00** of tests passed

| Requirement        | Total Tests | ✅ Passed | ❌ Failed  |
|--------------------|-------------|-----------|------------|
| ...                | ...         | ...       | ...        |
---


## 4️⃣ Key Gaps / Risks
{AI_GNERATED_KET_GAPS_AND_RISKS}
---