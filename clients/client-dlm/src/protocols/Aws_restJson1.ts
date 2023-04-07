// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
} from "../commands/CreateLifecyclePolicyCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "../commands/DeleteLifecyclePolicyCommand";
import {
  GetLifecyclePoliciesCommandInput,
  GetLifecyclePoliciesCommandOutput,
} from "../commands/GetLifecyclePoliciesCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "../commands/GetLifecyclePolicyCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
} from "../commands/UpdateLifecyclePolicyCommand";
import { DLMServiceException as __BaseException } from "../models/DLMServiceException";
import {
  _Parameters,
  Action,
  ArchiveRetainRule,
  ArchiveRule,
  CreateRule,
  CrossRegionCopyAction,
  CrossRegionCopyDeprecateRule,
  CrossRegionCopyRetainRule,
  CrossRegionCopyRule,
  DeprecateRule,
  EncryptionConfiguration,
  EventParameters,
  EventSource,
  FastRestoreRule,
  InternalServerException,
  InvalidRequestException,
  LifecyclePolicy,
  LifecyclePolicySummary,
  LimitExceededException,
  PolicyDetails,
  ResourceLocationValues,
  ResourceNotFoundException,
  ResourceTypeValues,
  RetainRule,
  RetentionArchiveTier,
  Schedule,
  ShareRule,
  Tag,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateLifecyclePolicyCommand
 */
export const se_CreateLifecyclePolicyCommand = async (
  input: CreateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.PolicyDetails != null && { PolicyDetails: se_PolicyDetails(input.PolicyDetails, context) }),
    ...(input.State != null && { State: input.State }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteLifecyclePolicyCommand
 */
export const se_DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies/{PolicyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PolicyId", () => input.PolicyId!, "{PolicyId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetLifecyclePoliciesCommand
 */
export const se_GetLifecyclePoliciesCommand = async (
  input: GetLifecyclePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies";
  const query: any = map({
    policyIds: [() => input.PolicyIds !== void 0, () => (input.PolicyIds! || []).map((_entry) => _entry as any)],
    state: [, input.State!],
    resourceTypes: [
      () => input.ResourceTypes !== void 0,
      () => (input.ResourceTypes! || []).map((_entry) => _entry as any),
    ],
    targetTags: [() => input.TargetTags !== void 0, () => (input.TargetTags! || []).map((_entry) => _entry as any)],
    tagsToAdd: [() => input.TagsToAdd !== void 0, () => (input.TagsToAdd! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetLifecyclePolicyCommand
 */
export const se_GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies/{PolicyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PolicyId", () => input.PolicyId!, "{PolicyId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLifecyclePolicyCommand
 */
export const se_UpdateLifecyclePolicyCommand = async (
  input: UpdateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies/{PolicyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PolicyId", () => input.PolicyId!, "{PolicyId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.PolicyDetails != null && { PolicyDetails: se_PolicyDetails(input.PolicyDetails, context) }),
    ...(input.State != null && { State: input.State }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateLifecyclePolicyCommand
 */
export const de_CreateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PolicyId != null) {
    contents.PolicyId = __expectString(data.PolicyId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateLifecyclePolicyCommandError
 */
const de_CreateLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteLifecyclePolicyCommand
 */
export const de_DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLifecyclePolicyCommandError
 */
const de_DeleteLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLifecyclePoliciesCommand
 */
export const de_GetLifecyclePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLifecyclePoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policies != null) {
    contents.Policies = de_LifecyclePolicySummaryList(data.Policies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLifecyclePoliciesCommandError
 */
const de_GetLifecyclePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLifecyclePolicyCommand
 */
export const de_GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy != null) {
    contents.Policy = de_LifecyclePolicy(data.Policy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLifecyclePolicyCommandError
 */
const de_GetLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateLifecyclePolicyCommand
 */
export const de_UpdateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLifecyclePolicyCommandError
 */
const de_UpdateLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.MutuallyExclusiveParameters != null) {
    contents.MutuallyExclusiveParameters = de_ParameterList(data.MutuallyExclusiveParameters, context);
  }
  if (data.RequiredParameters != null) {
    contents.RequiredParameters = de_ParameterList(data.RequiredParameters, context);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceIds != null) {
    contents.ResourceIds = de_PolicyIdList(data.ResourceIds, context);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1Action
 */
const se_Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.CrossRegionCopy != null && {
      CrossRegionCopy: se_CrossRegionCopyActionList(input.CrossRegionCopy, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1ActionList
 */
const se_ActionList = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Action(entry, context);
    });
};

/**
 * serializeAws_restJson1ArchiveRetainRule
 */
const se_ArchiveRetainRule = (input: ArchiveRetainRule, context: __SerdeContext): any => {
  return {
    ...(input.RetentionArchiveTier != null && {
      RetentionArchiveTier: se_RetentionArchiveTier(input.RetentionArchiveTier, context),
    }),
  };
};

/**
 * serializeAws_restJson1ArchiveRule
 */
const se_ArchiveRule = (input: ArchiveRule, context: __SerdeContext): any => {
  return {
    ...(input.RetainRule != null && { RetainRule: se_ArchiveRetainRule(input.RetainRule, context) }),
  };
};

/**
 * serializeAws_restJson1AvailabilityZoneList
 */
const se_AvailabilityZoneList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CreateRule
 */
const se_CreateRule = (input: CreateRule, context: __SerdeContext): any => {
  return {
    ...(input.CronExpression != null && { CronExpression: input.CronExpression }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.Times != null && { Times: se_TimesList(input.Times, context) }),
  };
};

/**
 * serializeAws_restJson1CrossRegionCopyAction
 */
const se_CrossRegionCopyAction = (input: CrossRegionCopyAction, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.RetainRule != null && { RetainRule: se_CrossRegionCopyRetainRule(input.RetainRule, context) }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

/**
 * serializeAws_restJson1CrossRegionCopyActionList
 */
const se_CrossRegionCopyActionList = (input: CrossRegionCopyAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CrossRegionCopyAction(entry, context);
    });
};

/**
 * serializeAws_restJson1CrossRegionCopyDeprecateRule
 */
const se_CrossRegionCopyDeprecateRule = (input: CrossRegionCopyDeprecateRule, context: __SerdeContext): any => {
  return {
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

/**
 * serializeAws_restJson1CrossRegionCopyRetainRule
 */
const se_CrossRegionCopyRetainRule = (input: CrossRegionCopyRetainRule, context: __SerdeContext): any => {
  return {
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

/**
 * serializeAws_restJson1CrossRegionCopyRule
 */
const se_CrossRegionCopyRule = (input: CrossRegionCopyRule, context: __SerdeContext): any => {
  return {
    ...(input.CmkArn != null && { CmkArn: input.CmkArn }),
    ...(input.CopyTags != null && { CopyTags: input.CopyTags }),
    ...(input.DeprecateRule != null && {
      DeprecateRule: se_CrossRegionCopyDeprecateRule(input.DeprecateRule, context),
    }),
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
    ...(input.RetainRule != null && { RetainRule: se_CrossRegionCopyRetainRule(input.RetainRule, context) }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.TargetRegion != null && { TargetRegion: input.TargetRegion }),
  };
};

/**
 * serializeAws_restJson1CrossRegionCopyRules
 */
const se_CrossRegionCopyRules = (input: CrossRegionCopyRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CrossRegionCopyRule(entry, context);
    });
};

/**
 * serializeAws_restJson1DeprecateRule
 */
const se_DeprecateRule = (input: DeprecateRule, context: __SerdeContext): any => {
  return {
    ...(input.Count != null && { Count: input.Count }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

/**
 * serializeAws_restJson1EncryptionConfiguration
 */
const se_EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CmkArn != null && { CmkArn: input.CmkArn }),
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
  };
};

/**
 * serializeAws_restJson1EventParameters
 */
const se_EventParameters = (input: EventParameters, context: __SerdeContext): any => {
  return {
    ...(input.DescriptionRegex != null && { DescriptionRegex: input.DescriptionRegex }),
    ...(input.EventType != null && { EventType: input.EventType }),
    ...(input.SnapshotOwner != null && { SnapshotOwner: se_SnapshotOwnerList(input.SnapshotOwner, context) }),
  };
};

/**
 * serializeAws_restJson1EventSource
 */
const se_EventSource = (input: EventSource, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: se_EventParameters(input.Parameters, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1ExcludeDataVolumeTagList
 */
const se_ExcludeDataVolumeTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1FastRestoreRule
 */
const se_FastRestoreRule = (input: FastRestoreRule, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: se_AvailabilityZoneList(input.AvailabilityZones, context),
    }),
    ...(input.Count != null && { Count: input.Count }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

/**
 * serializeAws_restJson1_Parameters
 */
const se__Parameters = (input: _Parameters, context: __SerdeContext): any => {
  return {
    ...(input.ExcludeBootVolume != null && { ExcludeBootVolume: input.ExcludeBootVolume }),
    ...(input.ExcludeDataVolumeTags != null && {
      ExcludeDataVolumeTags: se_ExcludeDataVolumeTagList(input.ExcludeDataVolumeTags, context),
    }),
    ...(input.NoReboot != null && { NoReboot: input.NoReboot }),
  };
};

/**
 * serializeAws_restJson1PolicyDetails
 */
const se_PolicyDetails = (input: PolicyDetails, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: se_ActionList(input.Actions, context) }),
    ...(input.EventSource != null && { EventSource: se_EventSource(input.EventSource, context) }),
    ...(input.Parameters != null && { Parameters: se__Parameters(input.Parameters, context) }),
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.ResourceLocations != null && {
      ResourceLocations: se_ResourceLocationList(input.ResourceLocations, context),
    }),
    ...(input.ResourceTypes != null && { ResourceTypes: se_ResourceTypeValuesList(input.ResourceTypes, context) }),
    ...(input.Schedules != null && { Schedules: se_ScheduleList(input.Schedules, context) }),
    ...(input.TargetTags != null && { TargetTags: se_TargetTagList(input.TargetTags, context) }),
  };
};

/**
 * serializeAws_restJson1ResourceLocationList
 */
const se_ResourceLocationList = (input: (ResourceLocationValues | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceTypeValuesList
 */
const se_ResourceTypeValuesList = (input: (ResourceTypeValues | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RetainRule
 */
const se_RetainRule = (input: RetainRule, context: __SerdeContext): any => {
  return {
    ...(input.Count != null && { Count: input.Count }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

/**
 * serializeAws_restJson1RetentionArchiveTier
 */
const se_RetentionArchiveTier = (input: RetentionArchiveTier, context: __SerdeContext): any => {
  return {
    ...(input.Count != null && { Count: input.Count }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

/**
 * serializeAws_restJson1Schedule
 */
const se_Schedule = (input: Schedule, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveRule != null && { ArchiveRule: se_ArchiveRule(input.ArchiveRule, context) }),
    ...(input.CopyTags != null && { CopyTags: input.CopyTags }),
    ...(input.CreateRule != null && { CreateRule: se_CreateRule(input.CreateRule, context) }),
    ...(input.CrossRegionCopyRules != null && {
      CrossRegionCopyRules: se_CrossRegionCopyRules(input.CrossRegionCopyRules, context),
    }),
    ...(input.DeprecateRule != null && { DeprecateRule: se_DeprecateRule(input.DeprecateRule, context) }),
    ...(input.FastRestoreRule != null && { FastRestoreRule: se_FastRestoreRule(input.FastRestoreRule, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RetainRule != null && { RetainRule: se_RetainRule(input.RetainRule, context) }),
    ...(input.ShareRules != null && { ShareRules: se_ShareRules(input.ShareRules, context) }),
    ...(input.TagsToAdd != null && { TagsToAdd: se_TagsToAddList(input.TagsToAdd, context) }),
    ...(input.VariableTags != null && { VariableTags: se_VariableTagsList(input.VariableTags, context) }),
  };
};

/**
 * serializeAws_restJson1ScheduleList
 */
const se_ScheduleList = (input: Schedule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Schedule(entry, context);
    });
};

/**
 * serializeAws_restJson1ShareRule
 */
const se_ShareRule = (input: ShareRule, context: __SerdeContext): any => {
  return {
    ...(input.TargetAccounts != null && { TargetAccounts: se_ShareTargetAccountList(input.TargetAccounts, context) }),
    ...(input.UnshareInterval != null && { UnshareInterval: input.UnshareInterval }),
    ...(input.UnshareIntervalUnit != null && { UnshareIntervalUnit: input.UnshareIntervalUnit }),
  };
};

/**
 * serializeAws_restJson1ShareRules
 */
const se_ShareRules = (input: ShareRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ShareRule(entry, context);
    });
};

/**
 * serializeAws_restJson1ShareTargetAccountList
 */
const se_ShareTargetAccountList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SnapshotOwnerList
 */
const se_SnapshotOwnerList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TagsToAddList
 */
const se_TagsToAddList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TargetTagList
 */
const se_TargetTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TimesList
 */
const se_TimesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1VariableTagsList
 */
const se_VariableTagsList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * deserializeAws_restJson1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return {
    CrossRegionCopy:
      output.CrossRegionCopy != null ? de_CrossRegionCopyActionList(output.CrossRegionCopy, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ActionList
 */
const de_ActionList = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Action(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ArchiveRetainRule
 */
const de_ArchiveRetainRule = (output: any, context: __SerdeContext): ArchiveRetainRule => {
  return {
    RetentionArchiveTier:
      output.RetentionArchiveTier != null ? de_RetentionArchiveTier(output.RetentionArchiveTier, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ArchiveRule
 */
const de_ArchiveRule = (output: any, context: __SerdeContext): ArchiveRule => {
  return {
    RetainRule: output.RetainRule != null ? de_ArchiveRetainRule(output.RetainRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AvailabilityZoneList
 */
const de_AvailabilityZoneList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CreateRule
 */
const de_CreateRule = (output: any, context: __SerdeContext): CreateRule => {
  return {
    CronExpression: __expectString(output.CronExpression),
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
    Location: __expectString(output.Location),
    Times: output.Times != null ? de_TimesList(output.Times, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CrossRegionCopyAction
 */
const de_CrossRegionCopyAction = (output: any, context: __SerdeContext): CrossRegionCopyAction => {
  return {
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    RetainRule: output.RetainRule != null ? de_CrossRegionCopyRetainRule(output.RetainRule, context) : undefined,
    Target: __expectString(output.Target),
  } as any;
};

/**
 * deserializeAws_restJson1CrossRegionCopyActionList
 */
const de_CrossRegionCopyActionList = (output: any, context: __SerdeContext): CrossRegionCopyAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CrossRegionCopyAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CrossRegionCopyDeprecateRule
 */
const de_CrossRegionCopyDeprecateRule = (output: any, context: __SerdeContext): CrossRegionCopyDeprecateRule => {
  return {
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

/**
 * deserializeAws_restJson1CrossRegionCopyRetainRule
 */
const de_CrossRegionCopyRetainRule = (output: any, context: __SerdeContext): CrossRegionCopyRetainRule => {
  return {
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

/**
 * deserializeAws_restJson1CrossRegionCopyRule
 */
const de_CrossRegionCopyRule = (output: any, context: __SerdeContext): CrossRegionCopyRule => {
  return {
    CmkArn: __expectString(output.CmkArn),
    CopyTags: __expectBoolean(output.CopyTags),
    DeprecateRule:
      output.DeprecateRule != null ? de_CrossRegionCopyDeprecateRule(output.DeprecateRule, context) : undefined,
    Encrypted: __expectBoolean(output.Encrypted),
    RetainRule: output.RetainRule != null ? de_CrossRegionCopyRetainRule(output.RetainRule, context) : undefined,
    Target: __expectString(output.Target),
    TargetRegion: __expectString(output.TargetRegion),
  } as any;
};

/**
 * deserializeAws_restJson1CrossRegionCopyRules
 */
const de_CrossRegionCopyRules = (output: any, context: __SerdeContext): CrossRegionCopyRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CrossRegionCopyRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeprecateRule
 */
const de_DeprecateRule = (output: any, context: __SerdeContext): DeprecateRule => {
  return {
    Count: __expectInt32(output.Count),
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionConfiguration
 */
const de_EncryptionConfiguration = (output: any, context: __SerdeContext): EncryptionConfiguration => {
  return {
    CmkArn: __expectString(output.CmkArn),
    Encrypted: __expectBoolean(output.Encrypted),
  } as any;
};

/**
 * deserializeAws_restJson1EventParameters
 */
const de_EventParameters = (output: any, context: __SerdeContext): EventParameters => {
  return {
    DescriptionRegex: __expectString(output.DescriptionRegex),
    EventType: __expectString(output.EventType),
    SnapshotOwner: output.SnapshotOwner != null ? de_SnapshotOwnerList(output.SnapshotOwner, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EventSource
 */
const de_EventSource = (output: any, context: __SerdeContext): EventSource => {
  return {
    Parameters: output.Parameters != null ? de_EventParameters(output.Parameters, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ExcludeDataVolumeTagList
 */
const de_ExcludeDataVolumeTagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FastRestoreRule
 */
const de_FastRestoreRule = (output: any, context: __SerdeContext): FastRestoreRule => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null ? de_AvailabilityZoneList(output.AvailabilityZones, context) : undefined,
    Count: __expectInt32(output.Count),
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

/**
 * deserializeAws_restJson1LifecyclePolicy
 */
const de_LifecyclePolicy = (output: any, context: __SerdeContext): LifecyclePolicy => {
  return {
    DateCreated:
      output.DateCreated != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.DateCreated)) : undefined,
    DateModified:
      output.DateModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.DateModified)) : undefined,
    Description: __expectString(output.Description),
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    PolicyArn: __expectString(output.PolicyArn),
    PolicyDetails: output.PolicyDetails != null ? de_PolicyDetails(output.PolicyDetails, context) : undefined,
    PolicyId: __expectString(output.PolicyId),
    State: __expectString(output.State),
    StatusMessage: __expectString(output.StatusMessage),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LifecyclePolicySummary
 */
const de_LifecyclePolicySummary = (output: any, context: __SerdeContext): LifecyclePolicySummary => {
  return {
    Description: __expectString(output.Description),
    PolicyId: __expectString(output.PolicyId),
    PolicyType: __expectString(output.PolicyType),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LifecyclePolicySummaryList
 */
const de_LifecyclePolicySummaryList = (output: any, context: __SerdeContext): LifecyclePolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LifecyclePolicySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ParameterList
 */
const de_ParameterList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1_Parameters
 */
const de__Parameters = (output: any, context: __SerdeContext): _Parameters => {
  return {
    ExcludeBootVolume: __expectBoolean(output.ExcludeBootVolume),
    ExcludeDataVolumeTags:
      output.ExcludeDataVolumeTags != null
        ? de_ExcludeDataVolumeTagList(output.ExcludeDataVolumeTags, context)
        : undefined,
    NoReboot: __expectBoolean(output.NoReboot),
  } as any;
};

/**
 * deserializeAws_restJson1PolicyDetails
 */
const de_PolicyDetails = (output: any, context: __SerdeContext): PolicyDetails => {
  return {
    Actions: output.Actions != null ? de_ActionList(output.Actions, context) : undefined,
    EventSource: output.EventSource != null ? de_EventSource(output.EventSource, context) : undefined,
    Parameters: output.Parameters != null ? de__Parameters(output.Parameters, context) : undefined,
    PolicyType: __expectString(output.PolicyType),
    ResourceLocations:
      output.ResourceLocations != null ? de_ResourceLocationList(output.ResourceLocations, context) : undefined,
    ResourceTypes: output.ResourceTypes != null ? de_ResourceTypeValuesList(output.ResourceTypes, context) : undefined,
    Schedules: output.Schedules != null ? de_ScheduleList(output.Schedules, context) : undefined,
    TargetTags: output.TargetTags != null ? de_TargetTagList(output.TargetTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PolicyIdList
 */
const de_PolicyIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceLocationList
 */
const de_ResourceLocationList = (output: any, context: __SerdeContext): (ResourceLocationValues | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceTypeValuesList
 */
const de_ResourceTypeValuesList = (output: any, context: __SerdeContext): (ResourceTypeValues | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RetainRule
 */
const de_RetainRule = (output: any, context: __SerdeContext): RetainRule => {
  return {
    Count: __expectInt32(output.Count),
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

/**
 * deserializeAws_restJson1RetentionArchiveTier
 */
const de_RetentionArchiveTier = (output: any, context: __SerdeContext): RetentionArchiveTier => {
  return {
    Count: __expectInt32(output.Count),
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

/**
 * deserializeAws_restJson1Schedule
 */
const de_Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    ArchiveRule: output.ArchiveRule != null ? de_ArchiveRule(output.ArchiveRule, context) : undefined,
    CopyTags: __expectBoolean(output.CopyTags),
    CreateRule: output.CreateRule != null ? de_CreateRule(output.CreateRule, context) : undefined,
    CrossRegionCopyRules:
      output.CrossRegionCopyRules != null ? de_CrossRegionCopyRules(output.CrossRegionCopyRules, context) : undefined,
    DeprecateRule: output.DeprecateRule != null ? de_DeprecateRule(output.DeprecateRule, context) : undefined,
    FastRestoreRule: output.FastRestoreRule != null ? de_FastRestoreRule(output.FastRestoreRule, context) : undefined,
    Name: __expectString(output.Name),
    RetainRule: output.RetainRule != null ? de_RetainRule(output.RetainRule, context) : undefined,
    ShareRules: output.ShareRules != null ? de_ShareRules(output.ShareRules, context) : undefined,
    TagsToAdd: output.TagsToAdd != null ? de_TagsToAddList(output.TagsToAdd, context) : undefined,
    VariableTags: output.VariableTags != null ? de_VariableTagsList(output.VariableTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ScheduleList
 */
const de_ScheduleList = (output: any, context: __SerdeContext): Schedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Schedule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ShareRule
 */
const de_ShareRule = (output: any, context: __SerdeContext): ShareRule => {
  return {
    TargetAccounts:
      output.TargetAccounts != null ? de_ShareTargetAccountList(output.TargetAccounts, context) : undefined,
    UnshareInterval: __expectInt32(output.UnshareInterval),
    UnshareIntervalUnit: __expectString(output.UnshareIntervalUnit),
  } as any;
};

/**
 * deserializeAws_restJson1ShareRules
 */
const de_ShareRules = (output: any, context: __SerdeContext): ShareRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ShareRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ShareTargetAccountList
 */
const de_ShareTargetAccountList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SnapshotOwnerList
 */
const de_SnapshotOwnerList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TagsToAddList
 */
const de_TagsToAddList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TargetTagList
 */
const de_TargetTagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimesList
 */
const de_TimesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VariableTagsList
 */
const de_VariableTagsList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
