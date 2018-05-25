import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../../entities/Question';
import { UrlUtilService } from '../../../Caliber/screening/services/UrlUtil/url-util.service';
<<<<<<< HEAD
=======
import { environment } from '../../../../../environments/environment';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef

  /**
   * Last modified by the Avengers
   *
<<<<<<< HEAD
=======
   * unified create and update question so that it sends the
   * same objects
   *
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef
   * Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * Danny S Chhunn | 1803-USF-MAR26 | Wezley Singleton
   *
   * Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient, private urlUtilService: UrlUtilService) { }

  // Test URL for mock data.
  // url: string="/question/"

  /**
   *  end point for zuul gateway servie pulled from urlUtilService and question endpoint is appended to it
   *  1803-USF-MAR26
   */
<<<<<<< HEAD
  private readonly questionEndPoint: string = this.urlUtilService.getBase() + 'question-service/question/';
  questions: Question[];

=======
  private readonly questionEndPoint: string = environment.gambitContext + 'question-service/question/';
  questions: Question[];

  /**
   * Modifed parameters to only take in question and tagIds and not also bucket id because that is already
   * stored in question
   * updated to be in sync with new Gambit question service modifications
   * @param question - question model
   * @param tagIds - array of tag ids
   */
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef
  createNewQuestion(question: Question, tagIds: number[]) {
    return this.http.post(this.questionEndPoint + 'createQuestion', { question: question, tagIds: tagIds }, httpOptions);
  }

<<<<<<< HEAD
=======
  /**
   * Removed dead code
   * Removed buckedId parameter
   * updated to be in sync with new Gambit question service modifications
   * @param question
   * @param newTagIds
   */
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef
  updateQuestion(question: Question, newTagIds: number[]) {
    return this.http.post(this.questionEndPoint + 'updateQuestion', { question: question, tagIds: newTagIds }, httpOptions);
  }
  /** deactivates question */
  deactivateQuestion(questionId: number) {
    return this.http.put(this.questionEndPoint + 'deactivateQuestion/' + questionId, httpOptions);
  }
  /** activates question */
  activateQuestion(questionId: number) {
    return this.http.put(this.questionEndPoint + 'activateQuestion/' + questionId, httpOptions);
  }
  /** gets all questions from bucket */
  getBucketQuestions(bucketId: number) {
    return this.http.get(this.questionEndPoint + 'bucketQuestions/' + bucketId);
  }
}
