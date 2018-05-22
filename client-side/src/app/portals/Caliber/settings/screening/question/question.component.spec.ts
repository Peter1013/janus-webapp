import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { QuestionComponent } from './question.component';
import { Dependencies } from '../../../caliber.test.module';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Question } from '../../../entities/Question';
import { AlertsService } from '../../../services/alerts.service';

import { Tag } from '../entities/Tag';
import { QUESTIONS } from '../../../screening/mock-data/mock-questions';

/**
   * Last modified by the Avengers
   *
   * Byron Hall | 1803-USF-MAR26 | Wezley Singleton
   *
   * Antonio Marrero Bonilla | 1803-USF-MAR26 | Wezley Singleton
   *
   */

fdescribe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  const t0: Tag = new Tag();
  t0.tagId = 1;
  t0.tagName = 'Java';
  const t1: Tag = new Tag();
  t1.tagId = 2;
  t1.tagName = 'HTML';

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test if the components is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test if the question is set to null after a save
  it('should set question to null', () => {
    component.setQuestionNull();
    expect(component.question).toEqual(new Question());
    expect(component.sampleAnswers.length).toBe(0);
    expect(component.currentTags.length).toBe(0);
  });

  // test if it displays Saved successfully
  it('should save successfully',
  inject([AlertsService], (service: AlertsService) => {
    component.savedSuccessfully();
    let msg = '';
    let ty = '';
    service.getMessage().subscribe((s) => {
      ty = s.type;
      msg = s.text;
      expect(ty).toEqual('success');
      expect(msg).toEqual('Saved successfully');
    });
  }));

  // test if it display update successfully successfully
  it('should update successfully',
  inject([AlertsService], (srv: AlertsService) => {
    component.updatedSuccessfully();
    let msgUpdate = '';
    let tyUpdate = '';
    srv.getMessage().subscribe((s) => {
      tyUpdate = s.type;
      msgUpdate = s.text;
      expect(tyUpdate).toEqual('success');
      expect(msgUpdate).toEqual('Updated successfully');
    });
  }));

  it('should display save unsuccessfull error message',
  inject([AlertsService], (srv: AlertsService) => {
    component.savedUnsuccessfull();
    let msgUpdate = '';
    let tyUpdate = '';
    srv.getMessage().subscribe((s) => {
      tyUpdate = s.type;
      msgUpdate = s.text;
      expect(tyUpdate).toEqual('error');
      expect(msgUpdate).toEqual('All Fields Must be Filled');
    });
  }));

  it('should add new tags', () => {
    component.addNewTag(t0);
    let lastTagIndex = component.currentTags.length - 1;
    expect(component.currentTags[lastTagIndex]).toEqual(t0);

    component.addNewTag(t1);
    lastTagIndex = component.currentTags.length - 1;

    expect(component.currentTags[lastTagIndex]).toEqual(t1);
    expect(component.currentTags[lastTagIndex - 1]).toEqual(t0);
  });

  it('should return all tags in the tag array', () => {
      expect(component.getTagIds().length).toBe(0);
      component.addNewTag(t0);
      expect(component.getTagIds().length).toBe(1);
  });

  it('should change question status', () => {
    component.changeQuesitonStatus(QUESTIONS[0]);
    expect(QUESTIONS[0].isActive).toBe(false);
    component.changeQuesitonStatus(QUESTIONS[0]);
    expect(QUESTIONS[0].isActive).toBe(true);
  });

  it('should edit a question', () => {
    component.editQuestion(QUESTIONS[0]);
    expect(component.question).toEqual(QUESTIONS[0]);
  });
});
